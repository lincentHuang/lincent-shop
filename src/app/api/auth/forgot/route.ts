/**
 * 用戶註冊 API 路由
 *
 * 流程說明：
 * 1. 接收用戶註冊資料（姓名、信箱、密碼、確認密碼）
 * 2. 驗證必填欄位和信箱格式
 * 3. 檢查信箱是否已被註冊
 * 4. 驗證密碼強度（至少6個字元）
 * 5. 對密碼進行加密處理
 * 6. 創建新用戶並儲存到資料庫
 * 7. 生成帳戶啟用令牌
 * 8. 發送啟用信件給用戶
 *
 * 使用方式：
 * POST /api/auth/signup
 * Content-Type: application/json
 * Body: {
 *   "name": "用戶姓名",
 *   "email": "user@example.com",
 *   "password": "密碼",
 *   "passwordConfirm": "確認密碼"
 * }
 *
 * 回應格式：
 * 成功：{ message: "註冊成功", success: true, data: userObject }
 * 失敗：{ message: "錯誤訊息", success: false }
 */

import User from "@/models/user";
import { db } from "@/utils/db";
import { validateEmail } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createActivationToken, createResetToken } from "@/utils/createActivationToken";
import { sendEmail } from "@/utils/sendEmail";
import { resetEmailTemplate } from "@/emailTemplates/resetEmailTemplate";

/**
 * GET 請求處理器 - 測試 API 是否正常運作
 * @param request - Next.js 請求物件
 * @returns API 狀態訊息
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Signup API is working!" });
}

/**
 * POST 請求處理器 - 處理用戶註冊邏輯
 * @param request - Next.js 請求物件，包含註冊資料
 * @returns 註冊結果和新用戶資料
 */
export async function POST(request: NextRequest) {
  try {
    // 連接資料庫
    await db.connectDB();

    // 解析請求內容，取得註冊資料
    const body = await request.json();
    const { email } = body;

    // 驗證必填欄位是否完整
    if (!email) {
      return NextResponse.json(
        { message: "所有欄位皆為必填", success: false },
        { status: 400 }
      );
    }

    // 驗證 Email 格式是否正確
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Email 格式不正確", success: false },
        { status: 400 }
      );
    }

    // 檢查 Email 是否已被其他用戶註冊
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "此 Email 沒有被註冊過", success: false },
        { status: 400 }
      );
    }


    const user_id = createResetToken({
      id: user._id.toString(),
    });
    // 構建啟用帳戶的網址
    const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;

    // 發送啟用信件給新註冊的用戶
    sendEmail(email, url, "Reset your password",resetEmailTemplate);

    db.disconnectDB();
    // 回傳註冊成功訊息和用戶資料
    return NextResponse.json(
      { message: "重設密碼郵件已經寄去你的信箱", success: true, data: "" },
      { status: 201 }
    );
  } catch (error) {
    // 捕捉任何錯誤並回傳錯誤訊息
    return NextResponse.json(
      { message: "處理失敗", error: error },
      { status: 400 }
    );
  }
}

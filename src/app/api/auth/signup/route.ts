import User from "@/models/user";
import { db } from "@/utils/db";
import { validateEmail } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createActivationToken } from "@/utils/createActivationToken";
import { sendEmail } from "@/utils/sendEmail";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Signup API is working!" });
}

export async function POST(request: NextRequest) {
  try {
    await db.connectDB();
    const body = await request.json();
    const { name, email, password, passwordConfirm } = body;
    if (!name || !email || !password || !passwordConfirm) {
      return NextResponse.json(
        { message: "所有欄位皆為必填", success: false },
        { status: 400 }
      );
    }
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Email 格式不正確", success: false },
        { status: 400 }
      );
    }
    // return NextResponse.json({
    //   message: "POST 請求成功",
    //   data: body,
    //   success: true,
    // });
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "此 Email 已被註冊", success: false },
        { status: 400 }
      );
    }
    // 此處可加入密碼強度驗證
    if (password.length < 6) {
      return NextResponse.json(
        { message: "密碼長度至少為 6 個字元", success: false },
        { status: 400 }
      );
    }
    const cryptedPassword = await bcrypt.hash(password, 12);

    // 建立新使用者
    const newUser = new User({
      name,
      email,
      password: cryptedPassword,
    });
    const addedUser = await newUser.save();
    const activation_token = createActivationToken({
      id: addedUser._id,
    });

    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(email, url, "Activate your account");
    return NextResponse.json(
      { message: "註冊成功", success: true, data: addedUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "處理失敗", error: error },
      { status: 400 }
    );
  }
}

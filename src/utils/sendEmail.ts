import { activeEmailTemplate } from "@/emailTemplates/emailTemplate1";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { ReactNode } from "react";

const { OAuth2 } = google.auth;

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVER_CLIENT_ID,
  MAILING_SERVER_CLIENT_SECRET,
  MAILING_SERVER_CLIENT_REFRESH_TOKEN,
  SENDER_MAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVER_CLIENT_ID,
  MAILING_SERVER_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);

// send email
export const sendEmail = async (
  to: string,
  url: string,
  subject: string,
): Promise<void> => {
  try {
    oauth2Client.setCredentials({
      refresh_token: MAILING_SERVER_CLIENT_REFRESH_TOKEN,
    });
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SENDER_MAIL_ADDRESS,
        clientId: MAILING_SERVER_CLIENT_ID,
        clientSecret: MAILING_SERVER_CLIENT_SECRET,
        refreshToken: MAILING_SERVER_CLIENT_REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    const mailOptions = {
      from: SENDER_MAIL_ADDRESS,
      to: to,
      subject: subject,
      html: activeEmailTemplate(to, url),
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ 驗證郵件已發送至用戶郵箱。");
  } catch (error) {
    console.error("❌ 發送驗證郵件失敗：", error);
    throw new Error("無法發送驗證郵件");
  }
};

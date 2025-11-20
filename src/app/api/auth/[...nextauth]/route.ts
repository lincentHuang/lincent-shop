import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "../lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { db } from "@/utils/db";
db.connectDB();
const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(client),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const email = credentials?.email || "";
        const password = credentials?.password || "";
        const user = await User.findOne({ email });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return SigninUser({ user, password });
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID || "",
      clientSecret: process.env.AUTH_FACEBOOK_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

const SigninUser = async ({
  user,
  password,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?:any;
  password: string;
}) => {
  if (!user?.password) {
    throw new Error("Please enter a valid password");
  }

  const textPasswordMatch = await bcrypt.compare(password, user.password);
  if (!textPasswordMatch) {
    throw new Error("Invalid email or password");
  }
  return user;
};

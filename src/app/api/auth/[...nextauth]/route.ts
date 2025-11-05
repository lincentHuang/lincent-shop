import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Auth0 from "next-auth/providers/auth0";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "../lib/db";

const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID || "",
      clientSecret: process.env.AUTH_FACEBOOK_SECRET || "",
    }),
    // Auth0({
    //   clientId: process.env.AUTH0_CLIENT_ID || "",
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
    //   issuer: process.env.AUTH0_DOMAIN,
    // }),
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

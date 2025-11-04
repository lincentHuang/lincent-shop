"use client";

import Image from "next/image";
import "../styles/test.scss";
import { HomeView } from "@/views/home";
import { signIn, signOut } from "next-auth/react";
import { useAuth } from "@/store/stores/auth";

export default function Home() {
  const { isLogin, userInfo } = useAuth();
  if (isLogin) {
    return (
      <>
        Signed in as {userInfo?.email} <br />
        <button onClick={() => signOut()}>Sign out </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );

  return (
    <div className="flex items-center justify-center font-sans dark:bg-black">
      <HomeView />
    </div>
  );
}

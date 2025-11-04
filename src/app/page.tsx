"use client";

import Image from "next/image";
import "../styles/test.scss";
import { HomeView } from "@/views/home";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
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

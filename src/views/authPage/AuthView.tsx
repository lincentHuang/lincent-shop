"use client";
// import { BackButton } from "@/components/Buttons/BackButton";
// import { Text, Title } from "@/components/Text";
import { XStack } from "@/components/XStack";
import { YStack } from "@/components/YStack";

import { SigninHeader } from "./_signin.comp/signin.header";
import Section from "@/components/Section";
import Signin from "./signin/signin";
import Signup from "./signup/signup";
import { ProvidersProps } from "@/app/signin/page";
import { cn } from "@/utils/style";
import { useState } from "react";
import Image from "next/image";

export default function AuthView({ providers }: { providers: ProvidersProps }) {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  return (
    <YStack className="justify-start items-start my-4 gap-4 w-full">
      <SigninHeader />
      <Section>
        <XStack className="gap-4 justify-center w-full ">
          <YStack className="flex-1 hidden lg:flex relative w-[300px] min-h-[600px]  rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683147746302-f5d920cede15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
              alt="test"
              fill
              className="object-cover"
            />
          </YStack>
          <YStack className="gap-4 items-center flex-1 justify-start  w-full">
            <YStack className="max-w-[400] w-full gap-25">
              {/* tab */}
              <YStack className="items-start w-full">
                <XStack className="h-11  justify-center bg-muted rounded-lg p-1">
                  <XStack
                    className={cn(
                      "px-4 py-2 rounded-md text-background font-bold",
                      activeTab === "signin" && "bg-white text-foreground"
                    )}
                    onClick={() => setActiveTab("signin")}>
                    Sign in
                  </XStack>
                  <XStack
                    className={cn(
                      "px-4 py-2 rounded-md text-background font-bold",
                      activeTab === "signup" && "bg-white text-foreground"
                    )}
                    onClick={() => setActiveTab("signup")}>
                    Sign up
                  </XStack>
                </XStack>
              </YStack>

              {activeTab === "signin" && <Signin providers={providers} />}
              {activeTab === "signup" && <Signup />}
            </YStack>
          </YStack>
        </XStack>
      </Section>
    </YStack>
  );
}

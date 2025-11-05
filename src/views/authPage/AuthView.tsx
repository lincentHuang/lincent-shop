"use client";
import { BackButton } from "@/components/Buttons/BackButton";
import { Text, Title } from "@/components/Text";
import { XStack } from "@/components/XStack";
import { YStack } from "@/components/YStack";

import { SigninHeader } from "./_signin.comp/signin.header";
import Section from "@/components/Section";
import Signin from "./signin/signin";
import Signup from "./signup/signup";

export default function AuthView() {
  return (
    <YStack className="justify-start items-start my-4 gap-4 w-full">
      <SigninHeader />
      <Section>
        <XStack className="gap-4">
          <Signin />
          <Signup />
        </XStack>
      </Section>
    </YStack>
  );
}

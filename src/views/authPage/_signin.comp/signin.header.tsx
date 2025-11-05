"use client";
import { BackButton } from "@/components/Buttons/BackButton";
import { Text } from "@/components/Text";
import { XStack } from "@/components/XStack";
import { YStack } from "@/components/YStack";
import { ChevronLeft } from "lucide-react";

export const SigninHeader = () => {
  return (
    <YStack className="items-start ">
      <BackButton />
    </YStack>
  );
};

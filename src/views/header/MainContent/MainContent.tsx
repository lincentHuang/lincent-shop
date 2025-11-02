import { XStack } from "@/components/XStack";
import React from "react";
import { Logo } from "../Logo";
import Search from "@/components/Search";
import { ShoppingBag } from "lucide-react";
import { YStack } from "@/components/YStack";
import { Text } from "@/components/Text";

export const MainContent = () => {
  return (
    <XStack className="h-[60px] w-full items-center justify-center gap-4">
      <Logo />
      <Search className=" flex-1" />
      <YStack className="relative size-15 items-center justify-center">
        <YStack className="relative">
          <ShoppingBag className="text-muted size-6" />
          <YStack className="absolute items-center justify-center bg-background-primary min-w-5.5 h-5.5 rounded-full -top-3 -right-3">
            <Text className="text-[12px] text-foreground-primary font-bold">
              1
            </Text>
          </YStack>
        </YStack>
      </YStack>
    </XStack>
  );
};

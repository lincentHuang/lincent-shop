import { XStack } from "@/components/XStack";
import React from "react";
import { Logo } from "../Logo";
import { CircleUser, ShoppingBag } from "lucide-react";
import { YStack } from "@/components/YStack";
import { Text } from "@/components/Text";
import { Avators } from "../../avators/Avators";

import { Search } from "./Search";
import { useAuth } from "@/store/stores/auth";

export const MainContent = () => {
  const { isLogin, userInfo } = useAuth();
  return (
    <YStack className="w-full">
      <XStack className="h-[60px] w-full items-center sm:justify-center gap-4  justify-between">
        <Logo isHeader />
        <Search />
        <XStack className="gap-3">
          <YStack className="relative sm:size-15 size-6 items-center justify-center">
            <YStack className="relative">
              <ShoppingBag className="text-muted size-6" />
              <YStack className="absolute items-center justify-center bg-background-primary min-w-5.5 h-5.5 rounded-full -top-3 -right-3">
                <Text className="text-[12px] text-foreground-primary font-bold">
                  1
                </Text>
              </YStack>
            </YStack>
          </YStack>
          <YStack className="sm:hidden">
            {isLogin && <Avators name={userInfo.avator} className="size-6" />}
            {!isLogin && <CircleUser className="size-6  text-gray-500" />}
          </YStack>
        </XStack>
      </XStack>
    </YStack>
  );
};

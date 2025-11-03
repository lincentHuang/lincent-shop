import { XStack } from "@/components/XStack";
import React from "react";
import { Logo } from "../Logo";
import Search from "@/components/Search";
import { ShoppingBag } from "lucide-react";
import { YStack } from "@/components/YStack";
import { Text } from "@/components/Text";
import { Avators } from "../../avators/Avators";
import { useUserInfo } from "@/hooks/userInfo/useUserInfo";

export const MainContent = () => {
  const { data } = useUserInfo();
  return (
    <XStack className="h-[60px] w-full items-center justify-center gap-4">
      <Logo isHeader />
      <Search className=" flex-1" />
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
        <Avators name={data.avator} className="size-6" />
      </YStack>
    </XStack>
  );
};

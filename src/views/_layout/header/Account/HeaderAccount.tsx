"use client";
import { XStack } from "@/components/XStack";
import React from "react";
import { Text } from "@/components/Text";
import { cn } from "@/utils/style";
import { Avators } from "@/views/_layout/avators/Avators";
import { RightPane } from "@/views/_layout/rightPane/RightPane";
import { ChevronDown, CircleUser } from "lucide-react";
import { useAuth } from "@/store/stores/auth";
export const HeaderAccount = () => {
  const { isLogin, userInfo } = useAuth();
  const [open, setOpen] = React.useState(false);

  const opacityStyle = "duration-300 opacity-60 group-hover:opacity-100";
  return (
    <XStack className="relative">
      <XStack
        onClick={() => setOpen(!open)}
        className={cn("gap-1 items-center cursor-pointer group relative")}>
        {!isLogin && <CircleUser className="size-4 text-gray-500" />}
        {isLogin && <Avators name={userInfo.avator} className="size-4" />}
        <Text variants="small" className={cn(opacityStyle, "")}>
          {isLogin ? userInfo.name : "account"}
        </Text>
        <ChevronDown className={cn(opacityStyle, open && "rotate-180", "")} />
      </XStack>
      {<RightPane open={open} />}
    </XStack>
  );
};

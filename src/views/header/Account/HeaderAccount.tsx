"use client";
import { XStack } from "@/components/XStack";
import React from "react";
import { Text } from "@/components/Text";
import { cn } from "@/utils/style";
import { Avators } from "@/views/avators/Avators";
import { RightPane } from "@/views/rightPane/RightPane";
import { ChevronDown, CircleUser } from "lucide-react";
import { useAuth } from "@/hooks/auth/useAuth";
import { useUserInfo } from "@/hooks/userInfo/useUserInfo";

export const HeaderAccount = () => {
  const { isLogin } = useAuth();
  const { data } = useUserInfo();
  const [open, setOpen] = React.useState(false);

  const opacityStyle = "duration-300 opacity-60 group-hover:opacity-100";
  return (
    <XStack className="relative">
      <XStack
        onClick={() => setOpen(!open)}
        className={cn("gap-1 items-center cursor-pointer group relative")}>
        {!isLogin && <CircleUser className="size-4 text-gray-500" />}
        {isLogin && <Avators name={data.avator} className="size-4" />}
        <Text variants="small" className={cn(opacityStyle, "")}>
          {isLogin ? data.name : "account"}
        </Text>
        <ChevronDown className={cn(opacityStyle, open && "rotate-180", "")} />
      </XStack>
      {<RightPane open={open} />}
    </XStack>
  );
};

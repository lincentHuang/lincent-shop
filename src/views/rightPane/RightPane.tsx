import { Collapsible } from "@/components/Collapsible";
import { YStack } from "@/components/YStack";
import { useAuth } from "@/hooks/auth/useAuth";
import { cn } from "@/utils/style";
import React from "react";
import { RightPaneMenu } from "./isLogin/RightPaneMenu";
import { RightPaneAuth } from "./isNotLogin/RightPaneAuth";
import { Title } from "@/components/Text";
import { useUserInfo } from "@/hooks/userInfo/useUserInfo";
type RightPaneProps = {
  open?: boolean;
};
export const RightPane = ({ open }: RightPaneProps) => {
  const { isLogin } = useAuth();
  return (
    <YStack className={cn("absolute top-[calc(100%+12px)] right-0 w-[300px]")}>
      <Collapsible open={!!open} className="  ">
        <YStack className="p-4 gap-4 items-center bg-[#f3f3f3] rounded-xl min-h-[300px]">
          <Title variants="h3"> Welcome !</Title>
          {isLogin && <RightPaneMenu />}
          {!isLogin && <RightPaneAuth />}
        </YStack>
      </Collapsible>
    </YStack>
  );
};

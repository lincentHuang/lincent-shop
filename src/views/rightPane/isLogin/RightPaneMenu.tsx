import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { YStack } from "@/components/YStack";
import { useAuth } from "@/hooks/auth/useAuth";
import { useUserInfo } from "@/hooks/userInfo/useUserInfo";
import { Avators } from "@/views/avators/Avators";
import React from "react";

export const RightPaneMenu = () => {
  const { data: userInfo } = useUserInfo();
  const { logout } = useAuth();

  return (
    <YStack className="w-full items-center gap-4">
      <YStack className="items-center">
        <Avators name={userInfo.avator} className="size-20 mb-4" />
        <Text>
          Hello, <strong>{userInfo.name}</strong>
        </Text>
      </YStack>
      <YStack>
        <Text>whish list</Text>
        <Text>whish list</Text>
        <Text>whish list</Text>
        <Text>whish list</Text>
      </YStack>
      <Button variant="ghost" onClick={() => logout()} className="text-red-600">
        Log out
      </Button>
    </YStack>
  );
};

import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { YStack } from "@/components/YStack";
import { useAuth } from "@/store/stores/auth";
import { Avators } from "@/views/_layout/avators/Avators";
import React from "react";

export const RightPaneMenu = () => {
  const { logout, userInfo } = useAuth();

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

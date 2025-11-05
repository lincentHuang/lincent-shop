import { Button } from "@/components/Buttons/Button";
import { Text } from "@/components/Text";
import { YStack } from "@/components/YStack";
import { useAuth } from "@/store/stores/auth";
import { Avators } from "@/views/_layout/avators/Avators";
import Image from "next/image";
import React from "react";

export const RightPaneMenu = () => {
  const { logout, userInfo } = useAuth();

  return (
    <YStack className="w-full items-center gap-4">
      <YStack className="items-center">
        <Image
          src={userInfo.imageUrl}
          alt="user avator"
          className="rounded-full overflow-hidden mb-2"
          width={80}
          height={80}
        />
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

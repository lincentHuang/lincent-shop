import { Text } from "@/components/Text";
import { XStack } from "@/components/XStack";
import { ShoppingBag } from "lucide-react";
import React from "react";

export const Logo = () => {
  return (
    <XStack className="header gap-2 items-center">
      <XStack className="items-center">
        <ShoppingBag className="size-10" />
      </XStack>
      <Text>Shop Go</Text>
    </XStack>
  );
};

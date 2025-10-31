import { XStack } from "@/components/XStack";
import React from "react";
import { NavData } from "./Nav.data";
import { Text } from "@/components/Text";

export const Nav = () => {
  return (
    <XStack className="gap-4 items-center">
      {NavData.map((item) => (
        <XStack key={item.label} className="gap-1 items-center cursor-pointer">
          {item.icon && <item.icon className="size-5 text-gray-500" />}
          <Text >{item.label}</Text>
        </XStack>
      ))}
    </XStack>
  );
};

import { XStack } from "@/components/XStack";
import React from "react";
import { NavType } from "./Nav.data";
import { Text } from "@/components/Text";
import { cn } from "@/utils/style";
import Image from "next/image";
import { Avators } from "@/views/avators/Avators";

export const NavItem = (item: NavType) => {
  return (
    <XStack
      key={item.label}
      className={cn(
        "gap-1 items-center cursor-pointer group",
        item.desktopOnly && "hidden xl:flex"
      )}>
      {item.icon && item.isAccount !== true && (
        <item.icon className="size-5 text-gray-500" />
      )}
      {item.isAccount && <Avators name="avator1" className="size-6" />}
      <Text className="duration-300 opacity-60 group-hover:opacity-100">
        {item.label}123
      </Text>
    </XStack>
  );
};

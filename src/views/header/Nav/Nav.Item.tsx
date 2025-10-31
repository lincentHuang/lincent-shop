"use client";
import { XStack } from "@/components/XStack";
import React from "react";
import { NavType } from "./Nav.data";
import { Text } from "@/components/Text";
import { cn } from "@/utils/style";

export const NavItem = (item: NavType) => {
  return (
    <XStack
      key={item.label}
      className={cn(
        "gap-1 items-center cursor-pointer group relative",
        item.desktopOnly && "hidden xl:flex"
      )}>
      {item.icon && <item.icon className="size-4 text-gray-500" />}
      <Text variants="small" className="duration-300 opacity-60 group-hover:opacity-100">
        {item.label}
      </Text>
    </XStack>
  );
};

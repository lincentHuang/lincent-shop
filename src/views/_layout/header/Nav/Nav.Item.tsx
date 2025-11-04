/* eslint-disable @next/next/no-img-element */
"use client";
import { XStack } from "@/components/XStack";
import React from "react";
import { Text } from "@/components/Text";
import { cn } from "@/utils/style";
import { NavType } from "@/datas/headerNav.data";
import { useCountry } from "@/store/stores/country";

export const NavItem = ({ ...item }: NavType) => {
  const { data: country } = useCountry();
  if (item.id === "locale") {
    return (
      <XStack
        key={item.label}
        className={cn(
          "gap-1 items-center cursor-pointer group relative",
          item.desktopOnly && "hidden lg:flex"
        )}>
        <img src={country?.flag} alt={country?.name} className="size-4" />
        <Text
          variants="small"
          className="duration-300 opacity-60 group-hover:opacity-100">
          {country?.name} / NTD
        </Text>
      </XStack>
    );
  }
  return (
    <XStack
      key={item.label}
      className={cn(
        "gap-1 items-center cursor-pointer group relative",
        item.desktopOnly && "hidden lg:flex"
      )}>
      {item.icon && <item.icon className="size-4 text-gray-500" />}

      <Text
        variants="small"
        className="duration-300 opacity-60 group-hover:opacity-100">
        {item.label}
      </Text>
    </XStack>
  );
};

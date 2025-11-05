"use client";

import { XStack } from "@/components/XStack";
import React from "react";
import { cn } from "@/utils/style";
import { NavItem } from "./Nav.Item";
import { HeaderAccount } from "../Account/HeaderAccount";
import { NavData } from "@/datas/headerNav.data";
import { countryProps } from "@/types/layoutType";

export const Nav = () => {
  return (
    <XStack className="h-8 w-full z-10 relative justify-end relative gap-4 items-center hidden sm:flex">
      {NavData.map((item, index) => (
        <React.Fragment key={item.label}>
          <NavItem {...item} />
          {index < NavData.length && (
            <XStack
              className={cn(
                "h-6 border-r w-0 border-muted",
                item.desktopOnly && "hidden lg:flex"
              )}
            />
          )}
        </React.Fragment>
      ))}
      <HeaderAccount />
    </XStack>
  );
};

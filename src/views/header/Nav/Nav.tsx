"use client";

import { XStack } from "@/components/XStack";
import React from "react";
import { NavData } from "./Nav.data";
import { cn } from "@/utils/style";
import { NavItem } from "./Nav.Item";
import { HeaderAccount } from "../Account/HeaderAccount";

export const Nav = () => {
  return (
    <XStack className="h-8 w-full z-10 relative justify-end relative gap-4 items-center">
      {NavData.map((item, index) => (
        <React.Fragment key={item.label}>
          <NavItem {...item} />
          {index < NavData.length && (
            <XStack
              className={cn(
                "h-6 w-px bg-muted",
                item.desktopOnly && "hidden xl:flex"
              )}
            />
          )}
        </React.Fragment>
      ))}
      <HeaderAccount />
    </XStack>
  );
};

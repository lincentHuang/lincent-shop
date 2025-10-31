import { XStack } from "@/components/XStack";
import React from "react";
import { NavData } from "./Nav.data";
import { Text } from "@/components/Text";
import { cn } from "@/utils/style";
import { NavItem } from "./Nav.Item";

export const Nav = () => {
  return (
    <XStack className="gap-4 items-center">
      {NavData.map((item, index) => (
        <React.Fragment key={item.label}>
          <NavItem {...item} />
          {index < NavData.length - 1 && (
            <XStack
              className={cn(
                "h-6 w-[1px] bg-muted",
                item.desktopOnly && "hidden xl:flex"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </XStack>
  );
};

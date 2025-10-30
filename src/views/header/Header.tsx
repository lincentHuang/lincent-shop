import React, { ReactNode } from "react";
import { Ad } from "./Ad";
import { XStack } from "@/components/XStack";
import { Search } from "lucide-react";
type HeaderProps = {
  showAd?: boolean;
};
export const Header = ({ showAd }: HeaderProps) => {
  return (
    <>
      <header>
        {showAd && <Ad />}
        <XStack className="header gap-4">
          <XStack className="items-center">
            <Search className="size-5"/>
          </XStack>
          this is header
        </XStack>
      </header>
    </>
  );
};

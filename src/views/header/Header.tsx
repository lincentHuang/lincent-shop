import React, { ReactNode } from "react";
import { Ad } from "./Ad";
import { XStack } from "@/components/XStack";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Logo } from "./Logo";
import { Nav } from "./Nav/Nav";
type HeaderProps = {
  showAd?: boolean;
};
export const Header = ({ showAd }: HeaderProps) => {
  return (
    <>
      {showAd && <Ad />}
      <header className="bg-header h-[60px] items-center justify-center flex">
        <XStack className="max-w-[1480px] w-full items-center px-4 justify-between gap-4">
          <Logo />
          <XStack className="gap-4 items-center">
            <Nav />
          </XStack>
        </XStack>
      </header>
    </>
  );
};

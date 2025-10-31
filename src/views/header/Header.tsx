"use client";

import { Ad } from "./Ad";
import { XStack } from "@/components/XStack";

import { Nav } from "./Nav/Nav";
import { YStack } from "@/components/YStack";
import { MainContent } from "./MainContent/MainContent";
type HeaderProps = {
  showAd?: boolean;
};
export const Header = ({ showAd }: HeaderProps) => {
  return (
    <>
      {showAd && <Ad />}
      <header className="bg-header flex items-center justify-center ">
        <YStack className="max-w-[1480px] w-full items-center px-4  gap-4 ">
          <Nav />
          <MainContent />
        </YStack>
      </header>
    </>
  );
};

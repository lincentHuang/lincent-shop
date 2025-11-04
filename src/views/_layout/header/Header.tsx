"use client";

import { Ad } from "./Ad";
import { XStack } from "@/components/XStack";

import { Nav } from "./Nav/Nav";
import { YStack } from "@/components/YStack";
import { MainContent } from "./MainContent/MainContent";
import { countryProps } from "@/types/layout";
type HeaderProps = {
  showAd?: boolean;
  country?: countryProps;
};
export const Header = ({ showAd, country }: HeaderProps) => {
  return (
    <>
      {showAd && <Ad />}
      <header className="bg-header flex items-center justify-center ">
        <YStack className="max-w-max-width w-full items-center px-4  gap-4 ">
          <Nav country={country} />
          <MainContent />
        </YStack>
      </header>
    </>
  );
};

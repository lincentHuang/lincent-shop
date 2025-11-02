import { YStack } from "@/components/YStack";
import React from "react";
import { FooterNav } from "./FooterNav/FooterNav";
import { Logo } from "../header/Logo";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-white min-h-[300px] items-center py-10">
      <YStack className="items-start gap-10 max-w-max-width px-4 w-full ">
        <Logo />
        <FooterNav />
      </YStack>
    </footer>
  );
};

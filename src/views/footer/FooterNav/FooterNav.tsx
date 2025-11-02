import { XStack } from "@/components/XStack";
import React from "react";
import { footerNavData } from "./FooterNav.data";
import { FooterNavCategory } from "./FooterNav.Category";

export const FooterNav = () => {
  return (
    <XStack className="items-center w-full">
      {footerNavData.map((category) => (
        <FooterNavCategory key={category.id} {...category} />
      ))}
    </XStack>
  );
};

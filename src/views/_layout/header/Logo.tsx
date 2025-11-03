import { Text } from "@/components/Text";
import { XStack } from "@/components/XStack";
import { cn } from "@/utils/style";
import { ShoppingBag } from "lucide-react";
import React from "react";
type LogoProps = {
  isHeader?: boolean;
  className?: string;
};
export const Logo = ({ isHeader,className }: LogoProps) => {
  return (
    <XStack className={cn("header gap-2 items-center",className)}>
      <XStack className="items-center">
        <ShoppingBag className="sm:size-10 size-6" />
      </XStack>
      <Text className={cn(isHeader && "hidden sm:flex")}>Shop Go</Text>
    </XStack>
  );
};

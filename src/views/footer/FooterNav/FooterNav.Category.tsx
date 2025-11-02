import React from "react";
import { FooterCategoryType } from "./FooterNav.data";
import { YStack } from "@/components/YStack";
import { Text } from "@/components/Text";

export const FooterNavCategory = (props: FooterCategoryType) => {
  return (
    <YStack className="flex-1">
      {/* title */}
      <YStack className="pb-3">
        <Text className="font-bold"> {props.label}</Text>
      </YStack>
      {/* list */}
      <YStack className="gap-2">
        {props.items.map((item) => (
          <YStack className="test" key={item.id}>
            <Text
              variants="small"
              className="text-foreground-secondary opacity-60 hover:opacity-100 hover:text-primary duration-300 cursor-pointer">
              {item.label}
            </Text>
          </YStack>
        ))}
      </YStack>
    </YStack>
  );
};

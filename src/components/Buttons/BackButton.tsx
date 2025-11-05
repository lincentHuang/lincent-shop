import React from "react";
import { Text } from "@/components/Text";
import { XStack } from "@/components/XStack";
import { YStack } from "@/components/YStack";
import { ChevronLeft } from "lucide-react";

export const BackButton = () => {
  return (
    <XStack
      className="py-2 gap-2 pl-2 cursor-pointer  px-4 rounded-full bg-white"
      onClick={() => history.back()}>
      <ChevronLeft />
      <Text>Go Back</Text>
    </XStack>
  );
};

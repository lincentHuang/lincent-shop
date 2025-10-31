import { Button } from "@/components/Button";
import { XStack } from "@/components/XStack";
import { YStack } from "@/components/YStack";

export const RightPaneAuth = () => {
  return (
    <YStack className="w-full items-center gap-6">
      <XStack className="w-full items-center gap-2">
        <Button variant="primary" className="w-full">
          Sign Up
        </Button>
        <Button variant="outline" className="w-full">
          Log In
        </Button>
      </XStack>
    </YStack>
  );
};

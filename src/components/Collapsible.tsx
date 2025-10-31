import { useMemo } from "react";
import { YStack } from "./YStack";
import { cn } from "@/utils/style";
type CollapsibleProps = {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  isChildrenWidth?: boolean;
};

export const Collapsible = ({
  open,
  children,
  className,
  direction = "column",
}: CollapsibleProps) => {
  const directionStyle = useMemo(
    () => ({
      column: cn(
        "grid grid-rows-[0fr] duration-300 will-change-[grid-template-rows]",
        open && "grid-rows-[1fr]"
      ),
      row: cn(
        "grid grid-cols-[0fr] duration-300 will-change-[grid-template-cols]",
        open && "grid-cols-[1fr]"
      ),
    }),
    [open]
  );

  return (
    <YStack className={cn(directionStyle[direction], className)}>
      <YStack className="overflow-hidden">
        <YStack id={"content"}>{children}</YStack>
      </YStack>
    </YStack>
  );
};

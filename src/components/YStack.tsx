import React from "react";
import cn from "clsx";
type YStackProps = React.ComponentProps<"div"> & {
  className?: string;
  children?: React.ReactNode;
};
export const YStack = ({ className, children, ...props }: YStackProps) => {
  return (
    <div {...props} className={cn("flex flex-col", className)}>
      {children}
    </div>
  );
};

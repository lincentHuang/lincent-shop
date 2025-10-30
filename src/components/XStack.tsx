import React from "react";
import cn from "clsx";
type YStackProps = React.ComponentProps<"div"> & {
  className?: string;
  children?: React.ReactNode;
};
export const XStack = ({ className, children, ...props }: YStackProps) => {
  return (
    <div {...props} className={cn("flex", className)}>
      {children}
    </div>
  );
};

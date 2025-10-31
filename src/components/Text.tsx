import { cn } from "@/utils/style";
import React, { ReactNode } from "react";

type TextProps = React.ComponentProps<"div"> & {
  children?: ReactNode;
};

type TitleVariants = { variants?: "h1" | "h2" | "h3" };

type TextVariants = { variants?: "p" | "small" };

export const Text = ({
  children,
  className,
  variants,
  ...props
}: TextProps & TextVariants) => {
  if (variants === "small") {
    return (
      <small {...props} className={cn("text-sm font-thin", className)}>
        {children}
      </small>
    );
  }
  return (
    <p {...props} className={cn("text-base ", className)}>
      {children}
    </p>
  );
};

export const Title = ({
  children,
  variants,
  className,
  ...props
}: TextProps & TitleVariants) => {
  if (variants === "h2") {
    return (
      <h2 {...props} className={cn("text-4xl font-bold", className)}>
        {children}
      </h2>
    );
  }
  if (variants === "h3") {
    return (
      <h3 {...props} className={cn("text-2xl font-bold", className)}>
        {children}
      </h3>
    );
  }
  return (
    <h1 {...props} className={cn("text-6xl font-bold", className)}>
      {children}
    </h1>
  );
};

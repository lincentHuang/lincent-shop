import { cn } from "@/utils/style";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "default" | "primary" | "secondary" | "text" | "ghost";
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  disabled = false,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium text-foreground-primarys transition-all duration-200 focus:outline-none cursor-pointer ";

  const variantClasses = {
    default: "bg-gray-200 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    primary:
      "bg-background-primary text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    text: "text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed hover:bg-current";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        disabled ? disabledClasses : "",
        className
      )}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

"use client";
import { cn } from "@/utils/style";
import { Search } from "lucide-react";
import React from "react";
import { Text } from "../Text";

interface SearchProps {
  placeholder?: string;
  className?: string;
}

export const SearchBarButton: React.FC<SearchProps> = ({
  placeholder = "搜索商品...",
  className = "",
}) => {
  return (
    <form className={cn("relative", className)}>
      <div
        className={cn(
          "relative flex items-center",
          "bg-white rounded-lg border border-gray-200  h-9 px-2",
          "transition-all duration-300 ease-in-out"
        )}>
        {/* 輸入框 */}
        <Search className="size-5" />
        <Text
          className={cn(
            "flex-1 min-w-0 pl-4 py-3 bg-transparent border-none outline-none",
            " text-gray-400",
            "text-sm md:text-base"
          )}>
          {placeholder}
        </Text>
      </div>
    </form>
  );
};

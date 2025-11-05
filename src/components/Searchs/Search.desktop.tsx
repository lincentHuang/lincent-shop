"use client";
import { cn } from "@/utils/style";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchProps> = ({
  placeholder = "搜索商品...",
  onSearch,
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div
        className={cn(
          "relative flex items-center",
          "bg-white rounded-lg border-2 h-11 pr-1",
          "transition-all duration-300 ease-in-out",
          isFocused
            ? "border-blue-500 shadow-lg shadow-blue-500/20"
            : "border-gray-200 hover:border-gray-300"
        )}>
        {/* 輸入框 */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "flex-1 pl-4 py-3 bg-transparent border-none outline-none",
            "text-gray-700 placeholder-gray-400",
            "text-sm md:text-base"
          )}
        />

        {/* 清除按鈕 */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className={cn(
              "flex items-center justify-center w-8 h-8 mr-2",
              "text-gray-400 hover:text-gray-600 rounded-lg",
              "hover:bg-gray-100 transition-colors duration-200"
            )}
            aria-label="清除搜索">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* 搜索按鈕 */}
        <button
          type="submit"
          className={cn(
            "flex items-center justify-center w-8 h-8",
            "bg-blue-500 hover:bg-blue-600 text-white rounded-md",
            "transition-colors duration-200 shadow-md hover:shadow-lg"
          )}
          aria-label="搜索">
          <SearchIcon />
        </button>
      </div>

      {/* 搜索建議下拉框預留位置 */}
      {isFocused && query && (
        <div
          className={cn(
            "absolute top-full left-0 right-0 mt-2",
            "bg-white rounded-lg border border-gray-200 shadow-lg",
            "max-h-60 overflow-y-auto z-50"
          )}>
          <div className="p-4 text-sm text-gray-500 text-center">
            輸入關鍵字開始搜索...
          </div>
        </div>
      )}
    </form>
  );
};


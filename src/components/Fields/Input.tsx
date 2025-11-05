import React, { useState } from "react";
import { useField } from "formik";
import { cn } from "@/utils/style";
import { XStack } from "../XStack";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  error,
  disabled = false,
  required = false,
  className = "",
  ...props
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <XStack
        className={cn(
          " w-full pl-4 py-3  gap-4 border-2 rounded-lg shadow-sm transition-colors duration-200",
          isFocused
            ? "border-blue-500  shadow-lg shadow-blue-500/20"
            : "border-gray-200 hover:border-gray-300",
          error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          disabled && "bg-gray-100 cursor-not-allowed opacity-60"
        )}>
        {icon && icon}
        <input
          {...field}
          {...props}
          id={name}
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "flex-1  bg-transparent border-none outline-none",
            "text-gray-700 placeholder-gray-400",
            "text-sm md:text-base"
          )}
        />
        {hasError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </XStack>

      {hasError && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <svg
            className="h-4 w-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {meta.error}
        </p>
      )}

      {error && !hasError && (
        <p className="absolute text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;

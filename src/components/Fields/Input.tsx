import React, { useState } from "react";
import { useField } from "formik";
import { cn } from "@/utils/style";
import { XStack } from "../XStack";
import { Eye, EyeClosed } from "lucide-react";
import { YStack } from "../YStack";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  isPassword?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  disabled = false,
  required = false,
  className = "",
  ...props
}) => {
  const [field, meta] = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const showFeedback =
    (!!isFocused && field.value?.trim().length > 2) || meta.touched;

    
  const hasError = showFeedback && meta.error;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${className}`}>
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
          " w-full px-4 py-3  gap-4 border-2 rounded-lg shadow-sm transition-colors duration-200",
          isFocused
            ? "border-blue-500  shadow-lg shadow-blue-500/20"
            : "border-gray-200 hover:border-gray-300",
          hasError && "border-red-500 focus:ring-red-500 focus:border-red-500",
          disabled && "bg-gray-100 cursor-not-allowed opacity-60"
        )}>
        {icon && icon}
        <input
          {...props}
          {...field}
          id={name}
          type={showPassword ? "text" : type}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            field.onBlur(e); // ✅ 呼叫 Formik 的 onBlur
          }}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "flex-1  bg-transparent border-none outline-none",
            "text-gray-700 placeholder-gray-400",
            "text-sm md:text-base"
          )}
        />
        {type === "password" && (
          <YStack
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-600 focus:outline-none size-6">
            {showPassword ? (
              <EyeClosed className="size-6" />
            ) : (
              <Eye className="size-6" />
            )}
          </YStack>
        )}
      </XStack>
      <YStack className="h-6">


      {hasError && (
        <p className=" text-sm text-red-600 flex items-center ">
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
      </YStack>

    </div>
  );
};

export default Input;

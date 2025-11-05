import React from "react";
import { BackButton } from "@/components/Buttons/BackButton";
import { Text, Title } from "@/components/Text";
import { XStack } from "@/components/XStack";
import { YStack } from "@/components/YStack";

export default function Signup() {
  return (
    <YStack className="gap-4 flex-1">
      <Title variants="h3"> Sign up</Title>
      <form action="" className="">
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-md p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-md p-2 w-full">
          Sign Up
        </button>
      </form>
    </YStack>
  );
}

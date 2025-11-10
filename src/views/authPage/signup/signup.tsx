import React from "react";
import { Title } from "@/components/Text";
import { YStack } from "@/components/YStack";
import Input from "@/components/Fields/Input";
import { Form, Formik } from "formik";
import { Key, KeyRound, Mail } from "lucide-react";

export default function Signup() {
  return (
    <YStack className="gap-4 flex-1">
      <Title variants="h3"> Sign up</Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
          
      <Form>
        <Input
          type="text"
          name="email"
          icon={<Mail />}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          icon={<KeyRound />}
          placeholder="Password"
          />
        <Input
          type="password"
          name="confirmPassword"
          icon={<KeyRound />}
          placeholder="Confirm Password"
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-md p-2 w-full">
          Sign Up
        </button>
      </Form>
      </Formik>
    </YStack>
  );
}

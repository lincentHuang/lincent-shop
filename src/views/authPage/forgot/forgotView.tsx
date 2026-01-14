"use client";

import React from "react";
import Input from "@/components/Fields/Input";
import Section from "@/components/Section";
import { YStack } from "@/components/YStack";
import { SigninHeader } from "@/views/authPage/_signin.comp/signin.header";
import { Form, FormikProvider, useFormik } from "formik";
import { KeyRound, LoaderCircle, Mail } from "lucide-react";
import * as Yup from "yup";
import { cn } from "@/utils/style";
import Link from "next/link";
import { Text, Title } from "@/components/Text";

export default function ForgotView() {
  const forgotHandler = (e: unknown) => {
    console.log(e, "forgot password");
  };
  const isLoading = false;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .min(3, "Must be at least 8 characters")
        .email("Invalid email address")
        .required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      forgotHandler({
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <YStack className="justify-start items-start my-4 gap-4 w-full">
      <SigninHeader />
      <Section>
        <YStack className="gap-4 w-1/2">
          <Title variants="h3"> Forgot password </Title>
          <FormikProvider value={formik}>
            <Form className="">
              <Input
                name="email"
                icon={<Mail />}
                type="text"
                placeholder="Email"
              />
              <Input
                icon={<KeyRound />}
                name="password"
                type="password"
                placeholder="Password"
              />

              <button
                type="submit"
                className={cn(
                  " p-2 w-full transition-colors duration-200",
                  "bg-blue-500 text-white rounded-md hover:bg-blue-600 ",
                  "flex justify-center items-center gap-2"
                )}>
                {isLoading && <LoaderCircle className="animate-spin " />}
                Sign In
              </button>
            </Form>
          </FormikProvider>
        </YStack>
      </Section>
    </YStack>
  );
}

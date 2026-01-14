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
import Image from "next/image";
import { XStack } from "@/components/XStack";
import { useForgot } from "@/hooks/useForgot";

export default function ForgotView() {
  const { trigger, isLoading } = useForgot();

  const forgotHandler = (e: { email: string }) => {
    trigger(e);
  };
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
    }),
    onSubmit: (values) => {
      forgotHandler({
        email: values.email,
      });
    },
  });

  return (
    <YStack className="justify-start items-start my-4 gap-4 w-full">
      <SigninHeader />
      <Section>
        <XStack className="gap-4 justify-center w-full ">
          <YStack className="flex-1 hidden lg:flex relative w-[300px] min-h-[600px]  rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683147746302-f5d920cede15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
              alt="test"
              fill
              className="object-cover"
            />
          </YStack>
          <YStack className="gap-4 items-center flex-1 justify-start  w-full">
            <YStack className="w-full max-w-[400px] pt-25 gap-4">
              <Title variants="h3"> Forgot password </Title>
              <FormikProvider value={formik}>
                <Form className="">
                  <Input
                    name="email"
                    icon={<Mail />}
                    type="text"
                    placeholder="Email"
                  />

                  <button
                    type="submit"
                    className={cn(
                      " p-2 w-full transition-colors duration-200",
                      "bg-blue-500 text-white rounded-md hover:bg-blue-600 ",
                      "flex justify-center items-center gap-2"
                    )}>
                    {isLoading && <LoaderCircle className="animate-spin " />}
                    Reset Password
                  </button>
                </Form>
              </FormikProvider>
            </YStack>
          </YStack>
        </XStack>
      </Section>
    </YStack>
  );
}

import Input from "@/components/Fields/Input";
import { Text, Title } from "@/components/Text";
import { YStack } from "@/components/YStack";
import { match } from "ts-pattern";
import { Form, FormikProvider, useFormik } from "formik";
import FacebookIcon from "./assets/facebook.svg";
import GoogleIcon from "./assets/google.svg";
import * as Yup from "yup";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";
import { ProvidersProps } from "@/app/signin/page";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { XStack } from "@/components/XStack";
import Image from "next/image";

export default function Signin({ providers }: { providers: ProvidersProps }) {
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
      console.log(values);
    },
  });

  const arrayProviders = Object.values(providers || {});

  return (
    <YStack className="gap-4 flex-1 w-full">
      <Title variants="h3"> Sign in</Title>
      <FormikProvider value={formik}>
        <Form>
          <Input name="email" icon={<Mail />} type="text" placeholder="Email" />
          <Input
            icon={<KeyRound />}
            name="password"
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition-colors duration-200">
            Sign In
          </button>
        </Form>
        <Link
          href={"/forgot-password"}
          className=" justify-start flex "
          onClick={() => {}}>
          <Text className="text-primary"> forgot password </Text>
        </Link>
      </FormikProvider>
      {arrayProviders.length > 0 && (
        <XStack className="w-full items-center gap-2">
          <div className="flex-1 h-px border-t border-gray-300"></div>
          <Text className="text-center text-gray-500">Or sign in with</Text>
          <div className="flex-1 h-px border-t border-gray-300 "></div>
        </XStack>
      )}
      <XStack className="w-full gap-3 flex ">
        {arrayProviders.length > 0 &&
          arrayProviders.map((provider: ClientSafeProvider) => {
            const iconImage = match(provider.name)
              .with("Google", () => <GoogleIcon className="size-6" />)
              .with("Facebook", () => <FacebookIcon className="size-6" />)
              .otherwise(() => "");
            return (
              <div key={provider.name} className="flex-1">
                <button
                  className=" border border-gray-400 gap-4 text-foreground rounded-md p-2 w-full flex items-center cursor-pointer transition-colors duration-200"
                  onClick={() => {
                    signIn(provider.id);
                  }}>
                  {iconImage}
                  {provider.name}
                </button>
              </div>
            );
          })}
      </XStack>
    </YStack>
  );
}

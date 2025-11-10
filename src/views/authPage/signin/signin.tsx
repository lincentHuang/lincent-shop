import Input from "@/components/Fields/Input";
import { Text, Title } from "@/components/Text";
import { YStack } from "@/components/YStack";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";

export default function Signin() {
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

  return (
    <YStack className="gap-4 flex-1">
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
            className=" justify-start flex mb-4"
            onClick={() => {}}>
            <Text className="text-primary"> forgot password </Text>
          </Link>
      </FormikProvider>
    </YStack>
  );
}

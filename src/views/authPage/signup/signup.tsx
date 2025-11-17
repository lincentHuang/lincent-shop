import { Title } from "@/components/Text";
import { YStack } from "@/components/YStack";
import Input from "@/components/Fields/Input";
import { Form, FormikProvider, useFormik } from "formik";
import { KeyRound, Mail } from "lucide-react";
import * as Yup from "yup";
import { useSignup } from "@/hooks/useSignup";

export default function Signup() {

  const {trigger:signupSubmit}= useSignup()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name:"",
      email: "",
      password: "",
      posswordConfirm: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .min(3, "Must be at least 8 characters")
        .email("Invalid email address")
        .required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      posswordConfirm: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      signupSubmit({
        name:values.name,
        email: values.email,
        password: values.password,
        passwordConfirm: values.posswordConfirm,
      });
    },
  });
  return (
    <YStack className="gap-4 flex-1 w-full">
      <Title variants="h3"> Sign up</Title>
      <FormikProvider value={formik}>
        <Form>
          <Input type="text" name="email" icon={<Mail />} placeholder="Email" />
          <Input
            type="password"
            name="password"
            icon={<KeyRound />}
            placeholder="Password"
          />
          <Input
            type="password"
            name="posswordConfirm"
            icon={<KeyRound />}
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md p-2 w-full">
            Sign Up
          </button>
        </Form>
      </FormikProvider>
    </YStack>
  );
}


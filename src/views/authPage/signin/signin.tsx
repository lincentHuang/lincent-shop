import Input from "@/components/Fields/Input";
import { Title } from "@/components/Text";
import { YStack } from "@/components/YStack";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email,
      password,
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
          <Input
            name="email"
            icon={<Mail />}
            type="text"
            onChange={onChange}
            placeholder="Email"
          />
          <Input
            icon={<KeyRound />}
            name="password"
            type="password"
            onChange={onChange}
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition-colors duration-200">
            Sign In
          </button>
        </Form>
      </FormikProvider>
    </YStack>
  );
}

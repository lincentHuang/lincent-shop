import Input from "@/components/Fields/Input";
import { Text, Title } from "@/components/Text";
import { YStack } from "@/components/YStack";
import { Form, Formik } from "formik";
import { KeyRound, Mail } from "lucide-react";

export default function Signin() {
  return (
    <YStack className="gap-4 flex-1">
      <Title variants="h3"> Sign in</Title>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        <Form>
          <Input
            name="email"
            icon={<Mail />}
            type="text"
            placeholder="Email"
            error="test"
            />
          <Input
            icon={<KeyRound />}
            name="password"
            type="password"
            error="test"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full">
            Sign In
          </button>
        </Form>
      </Formik>
    </YStack>
  );
}

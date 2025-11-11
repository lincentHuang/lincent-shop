import * as yup from "yup";

export const validateEmail = (email: string): boolean => {
  const emailSchema = yup.string().email();
  return emailSchema.isValidSync(email);
};

import AuthView from "@/views/authPage/AuthView";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from "next-auth/react";
import React from "react";

export type ProvidersProps = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
> | null;

export default async function page() {
  const providers = await getProviders();
  return <AuthView providers={providers} />;
}

import AuthView from "@/views/authPage/AuthView";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  LiteralUnion,
} from "next-auth/react";

export type ProvidersProps = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
> | null;

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function page({searchParams}:Props) {
  const params = await searchParams;
  const callbackUrl = (params.callbackUrl as string)|| "/";
  const session = await getSession();  
  if(session){
    return {
      redirect: {
        destination: callbackUrl as string,
      },
    };
  }
  const providers = await getProviders();
  return <AuthView providers={providers} callbackUrl={callbackUrl}/>;
}

import useSWRMutation from "swr/mutation";

import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { signIn, SignInResponse } from "next-auth/react";

// 從 OpenAPI schema 推斷類型
type SigninRequest = {
  email: string;
  password: string;
};
type SigninSuccessResponse = SignInResponse;
type SigninErrorResponse = { message: string };

// SWR fetcher 函數
const signinFetcher = async (
  url: string,
  { arg }: { arg: SigninRequest }
): Promise<SigninSuccessResponse> => {
  try {
    const response = await signIn("credentials", {
      redirect: false,
      ...arg,
    });
    return response as SigninSuccessResponse;
  } catch (err) {
    // 處理 Axios 錯誤
    if (err instanceof AxiosError) {
      const apiError = err.response?.data as SigninErrorResponse | undefined;
      // 拋出新的 Error,讓 onError 接收
      throw new Error(apiError?.message || "登入失敗,請稍後再試");
    }

    // 處理攔截器拋出的字串錯誤
    if (typeof err === "string") {
      throw new Error(err);
    }
    // 處理其他錯誤
    throw new Error("註冊失敗,請稍後再試");
  }
};

export const useSignin = (callbackUrl?: string) => {
  const router = useRouter();
  const { trigger, isMutating, error, data } = useSWRMutation(
    "/api/auth/signin",
    signinFetcher,
    {
      onSuccess: (data) => {
        if (data?.ok) {
          toast.success("登入成功!");
          setTimeout(() => {
            router.push(callbackUrl || "/");
          }, 300);
        }
        if (!data?.ok) {
          toast.error(data?.error || "登入失敗，請檢查帳號密碼是否正確");
        }
      },
    }
  );

  return {
    trigger,
    isLoading: isMutating,
    error,
    data,
  };
};

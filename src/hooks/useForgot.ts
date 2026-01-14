import useSWRMutation from "swr/mutation";
import axiosInstance from "@/lib/axioInstance";
import type { paths } from "@/types/api";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// 從 OpenAPI schema 推斷類型

type ForgotRequest = {
  email: string;
};

type ForgotSuccessResponse = {
  message?: string;
  success?: boolean;
  data?: string;
};

type ForgotErrorResponse = {
  message?: string;
  success?: boolean;
  errors?: string[];
};

// SWR fetcher 函數
const forgotFetcher = async (
  url: string,
  { arg }: { arg: ForgotRequest }
): Promise<ForgotSuccessResponse> => {
  try {
    const response = await axiosInstance.post<ForgotSuccessResponse>(url, arg);
    return response.data;
  } catch (err) {
    // 處理 Axios 錯誤
    if (err instanceof AxiosError) {
      const apiError = err.response?.data as ForgotErrorResponse | undefined;
      // 拋出新的 Error,讓 onError 接收
      throw new Error(apiError?.message || "重設密碼失敗，請稍後再試");
    }
    // 處理攔截器拋出的字串錯誤
    if (typeof err === "string") {
      throw new Error(err);
    }
    // 處理其他錯誤
    throw new Error("重設密碼失敗，請稍後再試");
  }
};

export const useForgot = () => {
  const { trigger, isMutating, error, data } = useSWRMutation(
    "/api/auth/forgot",
    forgotFetcher,
    {
      onSuccess: (data) => {
        toast.success(data?.message || "已經發送郵件過去");
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

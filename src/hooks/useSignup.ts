import useSWRMutation from "swr/mutation";
import axiosInstance from "@/lib/axioInstance";
import type { paths } from "@/types/api";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// 從 OpenAPI schema 推斷類型
type SignupRequest =
	paths["/api/auth/signup"]["post"]["requestBody"]["content"]["application/json"];
type SignupSuccessResponse =
	paths["/api/auth/signup"]["post"]["responses"]["201"]["content"]["application/json"];
type SignupErrorResponse =
	paths["/api/auth/signup"]["post"]["responses"]["400"]["content"]["application/json"];

// SWR fetcher 函數
const signupFetcher = async (
	url: string,
	{ arg }: { arg: SignupRequest }
): Promise<SignupSuccessResponse> => {
	try {
		const response = await axiosInstance.post<SignupSuccessResponse>(url, arg);
		return response.data;
	} catch (err) {
		// 處理 Axios 錯誤
		if (err instanceof AxiosError) {
			const apiError = err.response?.data as SignupErrorResponse | undefined;
			// 拋出新的 Error,讓 onError 接收
			throw new Error(apiError?.message || "註冊失敗,請稍後再試");
		}
		// 處理攔截器拋出的字串錯誤
		if (typeof err === "string") {
			throw new Error(err);
		}
		// 處理其他錯誤
		throw new Error("註冊失敗,請稍後再試");
	}
};

export const useSignup = (callbackUrl?:string) => {
	const router = useRouter();
	const { trigger, isMutating, error, data } = useSWRMutation(
		"/api/auth/signup",
		signupFetcher,
		{
			onSuccess: (data) => {
				toast.success(data?.message || "註冊成功！請檢查信箱進行驗證");
			},
		}
	);

	const signupAndLogin = async (signupData: SignupRequest) => {
		// 1. 先進行註冊（攔截器會處理錯誤）
		const result = await trigger(signupData);

		if (result) {
			// 2. 註冊成功後自動登入
			const signinResult = await signIn("credentials", {
				redirect: false,
				email: signupData.email,
				password: signupData.password,
			});

			if (signinResult?.ok) {
				setTimeout(() => {
					router.push(callbackUrl || "/");
				}, 500);
			} else {
				toast.error("註冊成功，但自動登入失敗，請手動登入");
				setTimeout(() => {
					router.push("/signin");
				}, 1000);
			}
		}
	};
	return {
		trigger: signupAndLogin,
		isLoading: isMutating,
		error,
		data,
	};
};

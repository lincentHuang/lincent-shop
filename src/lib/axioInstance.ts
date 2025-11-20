import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

// 請求攔截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 可以在這裡添加 token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 回應攔截器
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || "發生錯誤";
    toast.error(message);
    return Promise.reject(message);
  }
);

export default axiosInstance;

import createClient from 'openapi-fetch';
import type { paths } from '@/types/api';

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
});

// 請求攔截器
client.use({
  onRequest({ request }) {
    // 可以添加 token
    const token = localStorage.getItem('token');
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
    return request;
  },
  onResponse({ response }) {
    // 可以處理錯誤
    return response;
  },
});

export default client;
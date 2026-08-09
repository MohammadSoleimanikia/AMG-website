// apiClient.ts
import axios from 'axios';
import { API_BASE_URL } from './config';
import toast from 'react-hot-toast';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => {
    if (response.data?.statusCode === 405) {
      return Promise.reject({
        ...response.data,
        isUserNotFound: true,
        response: response,
      });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        toast.error( error.response.data?.message||'آدرس API پیدا نشد');
      } else if (status === 401) {
        toast.error( error.response.data?.message||'خطای سرور. لطفا دوباره تلاش کنید');
      }else if (status === 405) {
        toast.error( error.response.data?.message||'خطای سرور. لطفا دوباره تلاش کنید');
      } else if (status === 402) {
        toast.error( error.response.data?.message||'خطای سرور. لطفا دوباره تلاش کنید');
      } else if (status === 403) {
        toast.error( error.response.data?.message||'خطای سرور. لطفا دوباره تلاش کنید');
      } else if (status === 500) {
        toast.error( error.response.data?.message||'خطای سرور. لطفا دوباره تلاش کنید');
      } else {
        toast.error(error.response.data?.message || 'خطایی رخ داده است');
      }
    } else if (error.request) {
      toast.error('ارتباط با سرور برقرار نشد');
    } else {
      toast.error(error.message || 'خطای ناشناخته');
    }

    return Promise.reject(error);
  },
);

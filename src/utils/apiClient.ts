import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from './config';
import toast from 'react-hot-toast';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: () => true,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => {
    const data = response.data;

    // HTTP 405
    if (response.status === 405) {
      toast.error(data.message || 'خطای فرم');

      return Promise.reject({
        ...response,
        data: null,
        statusCode: 405,
        success: false,
        message: data.message,
      });
    }

    switch (data.statusCode) {
      case 401:
        Cookies.remove('accessToken');
        
        return Promise.reject({
          ...response,
          data: null,
          statusCode: 401,
          success: false,
          message: data.message,
        });

      case 402:
        toast.error('شما به این بخش دسترسی ندارید');

        return Promise.reject({
          ...response,
          data: null,
          statusCode: 402,
          success: false,
          message: data.message,
        });

      case 403:
        return Promise.reject({
          ...response,
          data: null,
          statusCode: 403,
          success: false,
          message: data.message,
        });

      case 404:
        return Promise.reject({
          ...response,
          data: null,
          statusCode: 404,
          success: false,
          message: data.message,
        });
    }

    // after error validations
    toast.success(data.message||'کد اعتبارسنجی برای شما ارسال شد');
    console.log(data.message)
    return {
      ...response,
      data: data,
      statusCode: data.statusCode || response.status,
      success: true,
      message: data.message,
    };
  },

  (error) => {
    const res = error.response?.data;

    if (res?.statusCode === 401) {
      Cookies.remove('accessToken');
    }

    return Promise.reject({
      ...error,
      statusCode: 500,
      success: false,
      data: null,
      message: res?.message,
    });
  },
);

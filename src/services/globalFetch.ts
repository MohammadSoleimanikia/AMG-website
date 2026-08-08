import { BaseResponse } from '@/_types/_bsResponse';
import { API_BASE_URL } from '@/utils/config';

export async function globalFetch<T>(
  endPoint: string,
  restProps?: RequestInit,
): Promise<BaseResponse<T>> {
  try {
    let response = await fetch(`${API_BASE_URL}${endPoint}`, {
      next: { revalidate: restProps?.next?.revalidate || 60 },
      cache: 'force-cache',
      ...restProps,
    });
    const data = await response.json();

    // 401
    if (!response.ok) {
      return {
        message: data?.message || 'در دریافت اطلاعات مشکلی پیش آمده است.',
        statusCode: data?.statusCode || response.status,
        data: null,
        errors: data?.errors || '',
        success: false,
      };
    }

    if (data.statusCode === 401) {
      return {
        message: data.message,
        statusCode: 401,
        data: null,
        errors: data.errors,
        success: false,
      };
    }
    // 402
    if (response.status === 402) {
      return {
        message: data.message,
        statusCode: 402,
        data: null,
        errors: data.errors,
        success: false,
      };
    }

    return await {
      data: data.data,
      statusCode: 200,
      errors: null,
      success: true,
      message: 'OK',
    };
  } catch (error) {
    return {
      data: null,
      statusCode: 500,
      errors: error,
      success: false,
      message: 'ارتباط با سرور برقرار نشد.',
    };
  }
}
import type { BaseResponse } from '@/_types/_bsResponse';
import { apiClient } from '@/utils/apiClient';

export const getFetcher = async <TResponse>(
  url: string,
): Promise<BaseResponse<TResponse>> => {
  const response = await apiClient.get<BaseResponse<TResponse>>(url);
  return response.data;
};
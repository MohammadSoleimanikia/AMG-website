import type { BaseResponse } from '@/_types/_bsResponse';
import { apiClient } from '@/utils/apiClient';

export const swrMutationFetcher = async <TResponse, TRequest>(
  url: string,
  { arg }: { arg: TRequest },
): Promise<BaseResponse<TResponse>> => {
  const response = await apiClient.post<BaseResponse<TResponse>>(url, arg);

  return response.data;
};

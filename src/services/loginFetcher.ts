import type { BaseResponse } from '@/_types/_bsResponse';
import type { LoginRequest } from '@/validation/loginSchema';
import { apiClient } from '@/utils/apiClient';
import { LoginResponse } from '@/_types/_login';

export const loginFetcher = async (
  url: string,
  { arg }: { arg: LoginRequest },
): Promise<BaseResponse<LoginResponse>> => {
  const response = await apiClient.post<BaseResponse<LoginResponse>>(url, arg);

  return response.data;
};

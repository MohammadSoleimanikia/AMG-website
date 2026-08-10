import type { BaseResponse } from '@/_types/_bsResponse';
import { OtpResponse } from '@/_types/_login';
import { apiClient } from '@/utils/apiClient';
import { OtpRequest } from '@/validation/otpSchema';

export const otpFetcher = async (
  url: string,
  { arg }: { arg: OtpRequest },
): Promise<BaseResponse<OtpResponse>> => {
  const response = await apiClient.post<BaseResponse<OtpResponse>>(url, arg);
  console.log("response",response)
  return response.data;
};

import type { SignUpFormType } from '@/validation/signUpSchema';

import { apiClient } from '@/utils/apiClient';
import { BaseResponse } from '@/_types/_bsResponse';

export type RegisterResponse = {
  
};

export const registerFetcher = async (
  url: string,
  { arg }: { arg: SignUpFormType },
): Promise<BaseResponse<RegisterResponse>> => {
  const response = await apiClient.post<BaseResponse<RegisterResponse>>(
    url,
    arg,
  );

  console.log('register response:', response);

  return response.data;
};
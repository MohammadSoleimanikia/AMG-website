import { BaseResponse } from './_bsResponse';

export type LoginResponse = BaseResponse<null>;
export type RegisterResponse = BaseResponse<null>;

export type User = {
  id: number;
    name: string;
    phone: string;
    gender: string;
    avatar?: string;
    wallet: string;
    alertMessage?: string;
    remaining_credit?: string;
    addresses: string[];
    role: string;
    categoryName: string;
};
export type OtpResponse = { user: User; token: string };
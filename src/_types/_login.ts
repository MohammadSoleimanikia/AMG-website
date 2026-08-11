import { BaseResponse } from './_bsResponse';
import { User } from './_user';

export type LoginResponse = BaseResponse<null>;
export type RegisterResponse = BaseResponse<null>;

export type OtpResponse = { user: User; token: string };

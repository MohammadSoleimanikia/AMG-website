export type BaseResponse<T> = {
  data: T|null;
  statusCode: 200 | 401 | 404 | 402 | 403 | 405;
  message: string;
  success: boolean;
  errors: null | "";
};
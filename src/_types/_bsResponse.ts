export type BaseResponse<T> = {
  data: T|null;
  statusCode: 200 | 401 | 404 | 402 | 403 | 405 | 500;
  message: string;
  success: boolean;
  errors: string | null | Record<string, string[]>;
};

import { apiClient } from './apiClient';

export async function sendRequest<T>(url: string, { arg }: { arg: T }) {
  console.log('start of send request');
  const response = await apiClient.post(url, arg);
  console.log('end of send request');
  // after validations
  return {
      data: response.data,
      statusCode: 200,
      errors: null,
      success: true,
      message: 'OK',
    };

}

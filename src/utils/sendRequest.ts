
import { apiClient } from './apiClient';

export async function sendRequest<T>(url: string, { arg }: { arg: T }) {
  const response = await apiClient.post(url, arg);
  
  // after validations
  return {
      data: response.data,
      statusCode: 200,
      errors: null,
      success: true,
      message: 'OK',
    };

}

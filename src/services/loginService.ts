import { LoginFormType } from '@/validattion/loginSchema';
import { LOGIN } from '.';
import { globalFetch } from './globalFetch';

export async function loginService(body: LoginFormType) {
  return await globalFetch(LOGIN, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

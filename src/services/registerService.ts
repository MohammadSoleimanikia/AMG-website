import { SignUpFormType } from '@/validattion/signUpSchema';
import { REGISTER } from '.';
import { globalFetch } from './globalFetch';

export async function registerService(body: SignUpFormType) {
  return await globalFetch(REGISTER, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

import { PHONE_REGEX } from '@/utils/regex';
import * as yup from 'yup';
export const loginSchema = yup.object({
  phone: yup
    .string()
    .required('شماره تلفن الزامی میباشد')
    .matches(PHONE_REGEX, 'شماره تلفن صحیح نمی باشد'),
});
export type LoginRequest = yup.InferType<typeof loginSchema>;

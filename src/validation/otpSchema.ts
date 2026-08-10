import * as yup from 'yup';
export const otpSchema = yup.object({
  code: yup
    .string()
    .required('کد اعتبارسنجی الزامی میباشد')
    .min(6, 'کد اعتبار سنجی باید 6 عدد باشد'),
  phone: yup
    .string()
    .required('شماره تلفن الزامی میباشد')
    .matches(/^09[0-9]{9}$/, 'شماره تلفن صحیح نمی باشد'),
});
export type OtpRequest = yup.InferType<typeof otpSchema>;

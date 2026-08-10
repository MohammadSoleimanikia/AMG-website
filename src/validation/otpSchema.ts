import * as yup from 'yup';
export const otpSchema = yup.object({
  phone: yup
    .string()
    .required('کد اعتبارسنجی الزامی میباشد')
    .min(6,"کد اعتبار سنجی باید 6 عدد باشد"),
});
export type OtpRequest = yup.InferType<typeof otpSchema>;

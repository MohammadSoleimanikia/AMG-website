'use client';
import { OTPInput } from 'input-otp';
import clsx from 'clsx/lite';
import OtpTimer from './otpTimer';
import FormProvider from '@/components/RHF/formProvider';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OtpRequest, otpSchema } from '@/validation/otpSchema';
import { Button, ButtonBase, FormHelperText, Typography } from '@mui/material';
import useSWRMutation from 'swr/mutation';
import { GET_USER, OTP } from '@/services';
import { swrMutationFetcher } from '@/utils/mutationFetcher';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { setCookie } from '@/services/cookie/setCookie';
import { OtpResponse } from '@/_types/_login';
import toast from 'react-hot-toast';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { FINANCIAL_PATH, HOME_PATH, SALE_PATH, WAREHOUSE_PATH } from '@/path';
import { UserRole } from '@/middleware';
import { useSWRConfig } from 'swr';
type OtpFormProps = {
  phone: string;
  origin: 'login' | 'signUp';
  setActiveStep: Dispatch<SetStateAction<'login' | 'signUp' | 'otp'>>;
};
export default function OtpForm({ setActiveStep, phone, origin }: OtpFormProps) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { trigger, isMutating } = useSWRMutation(
    OTP,
    swrMutationFetcher<OtpRequest, OtpResponse>,
  );

  const methods = useForm<OtpRequest>({
    defaultValues: { code: '', phone: phone },
    mode: 'onSubmit',
    resolver: yupResolver(otpSchema),
  });

  const submitHandler = async (data: OtpRequest) => {
    try {
      const response = await trigger({
        code: data.code,
        phone,
      });

      if (!response.success || !response.data?.token) {
        // throw error
        toast.error('اعتبارسنجی با خطا مواجه شد!');
        return;
      }

      const token = response.data.token;

      const decoded = jwtDecode<JwtPayload & { role: UserRole }>(token);

      if (!decoded.exp) {
        toast.error('توکن معتبر نیست!');
        return;
      }
      const expDate = new Date(decoded.exp * 1000);

      setCookie('accessToken', token, {
        expires: expDate,
      });
      // revalidate 
      await mutate(GET_USER);
      toast.success('ورود با موفقیت انجام شد');

      // role based redirect
      const role = decoded.role;

      switch (role) {
        case 'user':
          router.replace(HOME_PATH);
          break;
        case 'admin_super':
          router.replace(HOME_PATH);
          break;

        case 'expert_financial':
          router.replace(FINANCIAL_PATH);
          break;

        case 'expert_sale':
          router.replace(SALE_PATH);
          break;

        case 'expert_warehouse':
          router.replace(WAREHOUSE_PATH);
          break;

        default:
          router.replace(HOME_PATH);
          break;
      }
    } catch (error) {
      console.log('OTP verification error:', error);
    }
  };
  return (
    <div className="mx-2 w-full max-w-[400px] rounded-3xl bg-background-paper p-6 shadow-s18">
      {/* head section of form */}
      <div
        className={clsx(
          'relative flex min-h-[140px] w-full flex-col items-center',
          'bg-gradient-to-r from-[#6ee2e0] to-[#5257e5] p-6 pb-[94px] shadow-s14',
          'rounded-b-[100%] rounded-t-[90px]',
        )}
      >
        <div className="flex items-center rounded-full bg-common-white p-2">
          <div
            className={clsx(
              'rounded-full px-5 py-3 hover:cursor-pointer',
              'bg-common-black text-common-white',
            )}
          >
            کد فعالسازی
          </div>
        </div>

        {/* timer */}
        <div
          className={clsx(
            'size-20 rounded-full bg-common-white text-grey-600 opacity-80',
            'absolute bottom-0 translate-y-1/4',
            'flex items-center justify-center',
          )}
        >
          <OtpTimer initialTime={120} onComplete={() => setActiveStep('login')} />
        </div>
      </div>

      {/* [OTP Form] */}
      <div className="mb-6 mt-14 px-6" dir="ltr">
        <FormProvider
          methods={methods}
          handleSubmit={methods.handleSubmit(submitHandler)}
        >
          <Controller
            name="code"
            control={methods.control}
            render={({ field }) => (
              <OTPInput
                maxLength={6}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                onComplete={() => {
                  methods.handleSubmit(submitHandler)();
                }}
                render={({ slots }) => (
                  <div className="flex items-center justify-center gap-2">
                    {slots.map((slot, index) => (
                      <div
                        key={index}
                        className={clsx(
                          'relative flex size-12 items-center justify-center',
                          'bg-white rounded-lg border border-solid border-grey-400',
                          'text-xl font-medium text-grey-800',
                          'transition-all',
                          slot.isActive && 'border-primary-500 ring-primary-100 ring-2',
                        )}
                      >
                        {slot.char}

                        {slot.hasFakeCaret && (
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="bg-primary-500 h-6 w-px" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              />
            )}
          />
          {methods.formState?.errors?.code && (
            <FormHelperText className="mt-4 text-error-main">
              {methods.formState.errors.code.message}
            </FormHelperText>
          )}
          <ButtonBase
            className={clsx(
              'mt-6 w-full rounded-md bg-primary-lighter p-4',
              'font-medium text-primary-main',
              'hover:bg-primary-light',
            )}
            type="submit"
            disabled={isMutating}
          >
            {isMutating ? 'در حال ارسال...' : 'تائید'}
          </ButtonBase>
          <div className="flex items-center justify-between">
            <Button
              className={clsx('bg-transparent')}
              onClick={() => setActiveStep(origin)}
            >
              <Typography
                className="flex items-center justify-center gap-1 text-grey-600 hover:text-info-main"
                variant="body2"
              >
                <FaArrowLeftLong />
                ویرایش شماره موبایل
              </Typography>
            </Button>

            <Typography variant="body1">شماره:{phone}</Typography>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

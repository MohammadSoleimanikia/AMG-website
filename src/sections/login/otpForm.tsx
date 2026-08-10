'use client';
import { OTPInput } from 'input-otp';
import clsx from 'clsx';
import OtpTimer from './otpTimer';
import FormProvider from '@/components/RHF/formProvider';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OtpRequest, otpSchema } from '@/validation/otpSchema';
import { Button, ButtonBase, FormHelperText, Typography } from '@mui/material';
import useSWRMutation from 'swr/mutation';
import { OTP } from '@/services';
import { otpFetcher } from '@/services/otpFetcher';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useUser } from '@/providers/userProvider';
import { setCookie } from '@/services/cookie/setCookie';
type OtpFormProps = {
  setActiveStep: (step: 'login' | 'signUp' | 'otp') => void;
  phone: string;
};

export default function OtpForm({ setActiveStep, phone }: OtpFormProps) {
  const { setUser } = useUser();
  const { trigger, isMutating } = useSWRMutation(OTP, otpFetcher);


  const methods = useForm<OtpRequest>({
    defaultValues: { code: '', phone: phone },
    mode: 'onSubmit',
    resolver: yupResolver(otpSchema),
  });

  const submitHandler = async (data: OtpRequest) => {
    const response = await trigger({ code: data.code, phone });
    if (response.success == true && response.data?.token) {
      setUser(response.data?.user);
      setCookie('accessToken',response.data?.token)
      
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
            <FormHelperText>{methods.formState.errors.code.message}</FormHelperText>
          )}
          <ButtonBase
            className={clsx(
              'mt-6 w-full rounded-md bg-primary-lighter p-4',
              'font-medium text-primary-main',
              'hover:bg-primary-light',
              isMutating && 'cursor-not-allowed opacity-50',
            )}
            type="submit"
            disabled={isMutating}
          >
            {isMutating ? 'در حال ارسال...' : 'تائید'}
          </ButtonBase>
          <div className="flex items-center justify-between">
            <Button
              className={clsx('bg-transparent')}
              onClick={() => setActiveStep('login')}
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

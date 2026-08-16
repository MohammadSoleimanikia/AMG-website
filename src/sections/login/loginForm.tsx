'use client';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { Button, InputAdornment } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx/lite';
import { type LoginRequest, loginSchema } from '@/validation/loginSchema';
import FormProvider from '@/components/RHF/formProvider';
import useSWRMutation from 'swr/mutation';
import { LOGIN } from '@/services';
import { Dispatch, SetStateAction, useEffect } from 'react';
import RHFPhone from '@/components/RHF/RHFPhoneInput';
import { LoginResponse } from '@/_types/_login';
import { swrMutationFetcher } from '@/utils/mutationFetcher';
import toast from 'react-hot-toast';
import { AuthStep, OtpOrigin } from '.';

type LoginProps = {
  values: LoginRequest;
  onChange: Dispatch<SetStateAction<LoginRequest>>;
  setActiveStep: Dispatch<SetStateAction<AuthStep>>;
  setOtpPhone: Dispatch<SetStateAction<string>>;
  setOtpOrigin: Dispatch<SetStateAction<OtpOrigin>>;
};
export default function LoginForm({
  setActiveStep,
  values,
  onChange,
  setOtpOrigin,
  setOtpPhone,
}: LoginProps) {
  const { trigger, isMutating } = useSWRMutation(
    LOGIN,
    swrMutationFetcher< LoginRequest,LoginResponse>,
  );
  const methods = useForm<LoginRequest>({
    defaultValues: values,
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  // set form data after mounting
  useEffect(() => {
    methods.reset(values);
  }, [values]);
  const submitHandler = async (data: LoginRequest) => {
    try {
      const response = await trigger(data);

      if (response.success) {
        // save form data for returning from otp
        onChange(data);

        // set data for OTP
        setOtpPhone(data.phone);
        setOtpOrigin('login');

        toast.success('کد اعتبار سنجی به تلفن شما ارسال شد');

        setActiveStep('otp');
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  };
  return (
    <>
      <FormProvider methods={methods} handleSubmit={methods.handleSubmit(submitHandler)}>
        <div className="flex w-full flex-col items-center justify-center">
          <RHFPhone
            className="text-right"
            name="phone"
            placeholder="شماره تلفن"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <HiOutlineDevicePhoneMobile className="size-6" />
                  </InputAdornment>
                ),
              },
              htmlInput: {
                dir: 'rtl',
              },
            }}
          />

          <div className="mt-6 flex w-full items-center justify-between">
            <Button
              className={clsx(
                'w-full rounded-md bg-primary-lighter p-4',
                'font-medium text-primary-main',
                'hover:bg-primary-light',
              )}
              type="submit"
              disabled={isMutating}
            >
              {isMutating ? 'در حال ارسال...' : 'ورود'}
            </Button>
          </div>
        </div>
      </FormProvider>
    </>
  );
}

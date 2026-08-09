'use client';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { ButtonBase, InputAdornment } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { LoginFormType, loginSchema } from '@/validattion/loginSchema';
import RHFTextField from '@/components/RHF/RHFTextField';
import FormProvider from '@/components/RHF/formProvider';
import useSWRMutation from 'swr/mutation';
import { LOGIN } from '@/services';
import { sendRequest } from '@/utils/sendRequest';
import { Dispatch, SetStateAction } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { apiClient } from '@/utils/apiClient';

type LoginProps = {
  setActiveStep: Dispatch<SetStateAction<'login' | 'signUp' | 'otp'>>;
};
export default function OtpForm({ setActiveStep }: LoginProps) {
  // 
  const { trigger, isMutating } = useSWRMutation(`${LOGIN}`, sendRequest);

  const methods = useForm<LoginFormType>({
    defaultValues: { phone: '' },
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = async (data: LoginFormType) => {
    try {
      await apiClient.post('/login', data);
      toast.success('کد اعتبارسنجی به شما ارسال شد');
      setActiveStep('otp')
      
    } catch (error: any) {
      console.log(error)
    }
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#343A40',
            color: '#fff',
          },
          icon: '✅',
        }}
      />
      <FormProvider methods={methods} handleSubmit={methods.handleSubmit(submitHandler)}>
        <div className="flex w-full flex-col items-center justify-center">
          <RHFTextField
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
            }}
          />

          <div className="mt-6 flex w-full items-center justify-between">
            <ButtonBase
              className={clsx(
                'w-full rounded-md bg-primary-lighter p-4',
                'font-medium text-primary-main',
                'hover:bg-primary-light',
                isMutating && 'cursor-not-allowed opacity-50',
              )}
              type="submit"
              disabled={isMutating}
            >
              {isMutating ? 'در حال ارسال...' : 'ورود'}
            </ButtonBase>
          </div>
        </div>
      </FormProvider>
    </>
  );
}
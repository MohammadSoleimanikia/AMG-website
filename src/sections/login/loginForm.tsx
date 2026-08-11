'use client';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { ButtonBase, InputAdornment } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { type LoginRequest, loginSchema } from '@/validation/loginSchema';
import FormProvider from '@/components/RHF/formProvider';
import useSWRMutation from 'swr/mutation';
import { LOGIN } from '@/services';
import { Dispatch, SetStateAction } from 'react';
import RHFPhone from '@/components/RHF/RHFPhoneInput';
import { LoginResponse } from '@/_types/_login';
import { swrMutationFetcher } from '@/services/mutationFetcher';
import toast from 'react-hot-toast';

type LoginProps = {
  setPhone: Dispatch<SetStateAction<string>>;
  phone: string;
  setActiveStep: Dispatch<SetStateAction<'login' | 'signUp' | 'otp'>>;
};
export default function LoginForm({ setActiveStep, setPhone, phone }: LoginProps) {
 const { trigger, isMutating } = useSWRMutation(
  LOGIN,
  swrMutationFetcher<LoginResponse,LoginRequest>,
);
  const methods = useForm<LoginRequest>({
    defaultValues: { phone: phone || '' },
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = async (data: LoginRequest) => {
    const response = await trigger(data);
    if (response.success == true) {
      setPhone(data.phone);
      toast.success('کد اعتبار سنجی به تلفن شما ارسال شد')
      setActiveStep('otp');
    }
  };

  return (
    <>
      <FormProvider methods={methods} handleSubmit={methods.handleSubmit(submitHandler)}>
        <div className="flex w-full flex-col items-center justify-center">
          <RHFPhone
            className='text-right'
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

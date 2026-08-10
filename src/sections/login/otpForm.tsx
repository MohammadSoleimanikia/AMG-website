'use client';

import clsx from 'clsx';
import OtpTimer from './otpTimer';
import OTPInput from './otpInput';
import FormProvider from '@/components/RHF/formProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OtpRequest, otpSchema } from '@/validation/otpSchema';

type OtpFormProps = {
  setActiveStep: (step: 'login' | 'signUp' | 'otp') => void;
};

export default function OtpForm({ setActiveStep }: OtpFormProps) {
  const methods = useForm<OtpRequest>({
    defaultValues: { phone: '' },
    mode: 'onSubmit',
    resolver: yupResolver(otpSchema),
  });

  const submitHandler = async (data: OtpRequest) => {
    // add swr
    // const response = await trigger(data);
    // if fail
    if (!response.success) {
    }
    // if success
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
            'size-20 rounded-full bg-[#fff] text-grey-600 opacity-80',
            'absolute bottom-0 translate-y-1/4',
            'flex items-center justify-center',
          )}
        >
          <OtpTimer initialTime={120} onComplete={() => setActiveStep('login')} />
        </div>
      </div>
      <div className="mb-6 mt-14 px-6">
        <FormProvider
          methods={methods}
          handleSubmit={methods.handleSubmit(submitHandler)}
        >
          <OTPInput />
        </FormProvider>
      </div>
    </div>
  );
}

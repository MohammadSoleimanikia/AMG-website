'use client';
import LoginForm from '@/sections/login/loginForm';
import SignUpForm from '@/sections/login/signUpForm';
import TopFormSelector from '@/sections/login/topFormSelector';
import { useState } from 'react';
import OtpForm from './otpForm';
import { SignUpFormType } from '@/validation/signUpSchema';
export type AuthStep = 'login' | 'signUp' | 'otp';
export type OtpOrigin = 'login' | 'signUp';

export default function LoginPage() {
  const [activeStep, setActiveStep] = useState<AuthStep>('login');

  const [loginData, setLoginData] = useState({
    phone: '',
  });

  const [signUpData, setSignUpData] = useState<SignUpFormType>({
    phone: '',
    name: '',
    nationalCode: '',
    gender: '1',
    type: 'retailer',
  });

  const [otpPhone, setOtpPhone] = useState('');
  const [otpOrigin, setOtpOrigin] = useState<OtpOrigin>('login');

  if (activeStep === 'otp') {
    return <OtpForm phone={otpPhone} origin={otpOrigin} setActiveStep={setActiveStep} />;
  }
  return (
    <div className="mx-2 w-full max-w-[400px] rounded-3xl bg-background-paper p-6 shadow-s18">
      {/* head section of form */}
      <TopFormSelector activeStep={activeStep} setActiveStep={setActiveStep} />

      {/* form */}
      <div className="mb-6 mt-14 px-6">
        {activeStep === 'login' ? (
          <LoginForm
            values={loginData}
            onChange={setLoginData}
            setActiveStep={setActiveStep}
            setOtpPhone={setOtpPhone}
            setOtpOrigin={setOtpOrigin}
          />
        ) : (
          <SignUpForm
            values={signUpData}
            onChange={setSignUpData}
            setActiveStep={setActiveStep}
            setOtpPhone={setOtpPhone}
            setOtpOrigin={setOtpOrigin}
          />
        )}
      </div>
    </div>
  );
}

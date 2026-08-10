'use client';
import LoginForm from '@/sections/login/loginForm';
import SignUpForm from '@/sections/login/signUpForm';
import TopFormSelector from '@/sections/login/topFormSelector';
import { useState } from 'react';
import OtpForm from './otpForm';

export default function LoginPage() {
  const [phone, setPhone] = useState('');

  const [activeStep, setActiveStep] = useState<'login' | 'signUp' | 'otp'>('login');
  if (activeStep === 'otp') return <OtpForm phone={phone} setActiveStep={setActiveStep} />;
  return (
    <div className="mx-2 w-full max-w-[400px] rounded-3xl bg-background-paper p-6 shadow-s18">
      {/* head section of form */}
      <TopFormSelector activeStep={activeStep} setActiveStep={setActiveStep} />

      {/* form */}
      <div className="mb-6 mt-14 px-6">
        {activeStep === 'login' ? (
          <LoginForm phone={phone} setPhone={setPhone} setActiveStep={setActiveStep} />
        ) : (
          <SignUpForm setActiveStep={setActiveStep} />
        )}
      </div>
    </div>
  );
}

'use client';
import LoginForm from '@/sections/login/loginForm';
import SignUpForm from '@/sections/login/signUpForm';
import TopFormSelector from '@/sections/login/topFormSelector';
import { Container, Typography } from '@mui/material';
import { useState } from 'react';

export default function Page() {
  const [activeStep, setActiveStep] = useState<'login' | 'signUp' | 'otp'>('login');
  return (
    <div className="h-full overflow-hidden bg-background-default">
      {/* header */}
      <div className="w-full bg-primary-main">
        <Container maxWidth="xxl" className="w-full py-9">
          <Typography className="text-common-white" variant="h1">
            ورود و عضویت
          </Typography>
        </Container>
      </div>

      <div className="my-16 flex justify-center">
        <div className="mx-2 w-full max-w-[400px] rounded-3xl bg-background-paper p-6 shadow-s18">
          {/* head section of form */}
          <TopFormSelector activeStep={activeStep} setActiveStep={setActiveStep} />

          {/* form */}
          <div className="mb-6 mt-14 px-6">
            {activeStep == 'login' ? <LoginForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

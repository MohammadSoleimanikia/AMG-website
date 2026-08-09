'use client';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import {
  ButtonBase,
  FormHelperText,
  InputAdornment,
  Snackbar,
  TextField,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import { LoginFormType, loginSchema } from '@/validattion/loginSchema';
import { loginService } from '@/services/loginService';
import RHFTextField from '@/components/RHFTextField';

export default function LoginForm() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: { phone: '' },
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = async (data: LoginFormType) => {
    console.log(typeof data.phone)
    const response = await loginService(data);

    if (!response.success) {
      setSnackbarMessage(response.message || 'خطایی رخ داده است');
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage('ورود با موفقیت انجام شد');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message={snackbarMessage}
      />

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex w-full flex-col items-center justify-center"
      >
        <RHFTextField
          control={control}
          name="phone"
          errors={errors}
          placeholder="شماره تلفن"
          icon={HiOutlineDevicePhoneMobile}
        />
      
        <div className="mt-6 flex w-full items-center justify-between">
          <ButtonBase
            className={clsx(
              'w-full rounded-md bg-primary-lighter p-4',
              'font-medium text-primary-main',
              'hover:bg-primary-light',
            )}
            type="submit"
          >
            ورود
          </ButtonBase>
        </div>
      </form>
    </>
  );
}

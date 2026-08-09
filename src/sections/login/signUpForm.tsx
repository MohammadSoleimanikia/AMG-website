'use client';
import { CiShop } from 'react-icons/ci';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { ButtonBase, FormHelperText, InputAdornment, Snackbar } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import { CiCreditCard1 } from 'react-icons/ci';
import RHFTextField from '@/components/RHF/RHFTextField';
import { SignUpFormType, signUpSchema } from '@/validattion/signUpSchema';
import { registerService } from '@/services/registerService';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '@/components/RHF/formProvider';
import { FiUser } from 'react-icons/fi';

type SignUpProps = {
  setActiveStep: Dispatch<SetStateAction<'login' | 'signUp' | 'otp'>>;
};

export default function SignUpForm({setActiveStep}:SignUpProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const methods = useForm<SignUpFormType>({
    defaultValues: {
      phone: '',
      name: '',
      nationalCode: '',
      gender: '1',
      type: 'retailer',
    },
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
  });


  const submitHandler = async (data: SignUpFormType) => {
    const response = await registerService(data);

    if (!response.success) {
      setSnackbarMessage(response.message || 'خطایی رخ داده است');
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage('ثبت نام با موفقیت انجام شد');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const activeType = methods.watch('type');

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message={snackbarMessage}
      />

      <FormProvider methods={methods} handleSubmit={methods.handleSubmit(submitHandler)}>
        <div className="flex w-full flex-col items-center justify-center space-y-4">
          {/* full name */}
          <RHFTextField
            name="name"
            placeholder="نام و نام خانوادگی"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FiUser className="size-6" />
                  </InputAdornment>
                ),
              },
            }}
          />
         

          {/* mobile number */}
          <RHFTextField
            name="phone"
            placeholder="شماره موبایل"
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

          {/* national code */}
          <RHFTextField
            name="nationalCode"
            placeholder="کد ملی"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CiCreditCard1 className="size-6" />
                  </InputAdornment>
                ),
              },
            }}
          />
          

          {/* select gender */}
          <div className="w-full">
            <Controller
              control={methods.control}
              name="gender"
              render={({ field: { onChange, value } }) => (
                <Select className="w-full" value={value} onChange={onChange}>
                  <MenuItem value={'1'}>مرد</MenuItem>
                  <MenuItem value={'0'}>زن</MenuItem>
                  <MenuItem value={'2'}>سایر</MenuItem>
                </Select>
              )}
            />
            {methods.formState.errors.gender && (
              <FormHelperText className="w-full pr-3 text-right text-error-main">
                {methods.formState.errors.gender.message}
              </FormHelperText>
            )}
          </div>

          <div className="flex w-full gap-3">
            <ButtonBase
              onClick={() => methods.setValue('type', 'wholesaler')}
              className={clsx(
                'flex h-12 w-full items-center justify-center gap-2 rounded text-xs font-medium text-info-main sm:text-sm',
                'border border-solid border-info-main transition-colors duration-300',
                activeType == 'wholesaler'
                  ? 'bg-info-main !text-common-white hover:bg-info-dark'
                  : 'text-info-main hover:bg-info-light',
              )}
            >
              <CiShop className="size-6" />
              عمده فروش
            </ButtonBase>
            <ButtonBase
              onClick={() => methods.setValue('type', 'retailer')}
              className={clsx(
                'flex h-12 w-full items-center justify-center gap-2 rounded text-xs font-medium text-info-main sm:text-sm',
                'border border-solid border-info-main transition-colors duration-300',
                activeType == 'retailer'
                  ? 'bg-info-main !text-common-white hover:bg-info-dark'
                  : 'text-info-main hover:bg-info-light',
              )}
            >
              <HiOutlineBuildingLibrary className="size-6" />
              خرده فروش
            </ButtonBase>
          </div>

          {/* submit button */}
          <div className="mt-6 flex w-full items-center justify-between">
            <ButtonBase
              className={clsx(
                'w-full rounded-md bg-primary-lighter p-4',
                'font-medium text-primary-main',
                'hover:bg-primary-light',
              )}
              type="submit"
            >
              ثبت نام
            </ButtonBase>
          </div>
        </div>
      </FormProvider>
    </>
  );
}

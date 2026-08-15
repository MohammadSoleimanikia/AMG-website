'use client';

import { CiShop, CiCreditCard1 } from 'react-icons/ci';
import { HiOutlineBuildingLibrary, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { FiUser } from 'react-icons/fi';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ButtonBase, FormHelperText, InputAdornment } from '@mui/material';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import useSWRMutation from 'swr/mutation';

import RHFTextField from '@/components/RHF/RHFTextField';
import FormProvider from '@/components/RHF/formProvider';

import { SignUpFormType, signUpSchema } from '@/validation/signUpSchema';
import { REGISTER } from '@/services';
import { swrMutationFetcher } from '@/services/mutationFetcher';
import RHFPhone from '@/components/RHF/RHFPhoneInput';
import { BaseResponse } from '@/_types/_bsResponse';
import { RegisterResponse } from '@/_types/_login';
import toast from 'react-hot-toast';
import { AuthStep, OtpOrigin } from '.';

type SignUpProps = {
  values: SignUpFormType;
  onChange: Dispatch<SetStateAction<SignUpFormType>>;
  setActiveStep: Dispatch<SetStateAction<AuthStep>>;
  setOtpPhone: Dispatch<SetStateAction<string>>;
  setOtpOrigin: Dispatch<SetStateAction<OtpOrigin>>;
};

export default function SignUpForm({
  setActiveStep,
  onChange,
  setOtpOrigin,
  setOtpPhone,
  values,
}: SignUpProps) {
  const { trigger, isMutating } = useSWRMutation(
    REGISTER,
    swrMutationFetcher<RegisterResponse, SignUpFormType>,
  );

  const methods = useForm<SignUpFormType>({
    defaultValues: values,
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
  });

  useEffect(() => {
    methods.reset(values);
  }, [values]);

  const submitHandler = async (data: SignUpFormType) => {
    try {
      const response = await trigger(data);

      if (response.success) {
        onChange(data);
        setOtpPhone(data.phone);
        setOtpOrigin('signUp');

        toast.success('کد اعتبار سنجی برای شما ارسال شد');
        setActiveStep('otp');
      }
    } catch (error) {
      console.log('Register error:', error);
    }
  };

  const activeType = methods.watch('type');

  return (
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
        <RHFPhone
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
            htmlInput: {
              dir: 'rtl',
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
            htmlInput: {
              maxLength: 10,
            },
          }}
        />

        {/* gender */}
        <div className="w-full">
          <Controller
            control={methods.control}
            name="gender"
            render={({ field }) => (
              <Select className="w-full" value={field.value} onChange={field.onChange}>
                <MenuItem value="1">مرد</MenuItem>
                <MenuItem value="0">زن</MenuItem>
                <MenuItem value="2">سایر</MenuItem>
              </Select>
            )}
          />

          {methods.formState.errors.gender && (
            <FormHelperText className="w-full pr-3 text-right text-error-main">
              {methods.formState.errors.gender.message}
            </FormHelperText>
          )}
        </div>

        {/* account type */}
        <div className="flex w-full gap-3">
          <ButtonBase
            type="button"
            onClick={() =>
              methods.setValue('type', 'wholesaler', {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={clsx(
              'flex h-12 w-full items-center justify-center gap-2 rounded',
              'border border-solid border-info-main',
              'text-xs font-medium sm:text-sm',
              'transition-colors duration-300',
              activeType === 'wholesaler'
                ? 'bg-info-main !text-common-white hover:bg-info-dark'
                : 'text-info-main hover:bg-info-light',
            )}
          >
            <CiShop className="size-6" />
            عمده فروش
          </ButtonBase>

          <ButtonBase
            type="button"
            onClick={() =>
              methods.setValue('type', 'retailer', {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={clsx(
              'flex h-12 w-full items-center justify-center gap-2 rounded',
              'border border-solid border-info-main',
              'text-xs font-medium sm:text-sm',
              'transition-colors duration-300',
              activeType === 'retailer'
                ? 'bg-info-main !text-common-white hover:bg-info-dark'
                : 'text-info-main hover:bg-info-light',
            )}
          >
            <HiOutlineBuildingLibrary className="size-6" />
            خرده فروش
          </ButtonBase>
        </div>

        {/* submit */}
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
            {isMutating ? 'در حال ارسال...' : 'ثبت نام'}
          </ButtonBase>
        </div>
      </div>
    </FormProvider>
  );
}

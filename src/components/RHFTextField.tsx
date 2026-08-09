'use client';

import { FormHelperText, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Control, Controller, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { IconType } from 'react-icons';
import { FaRegUser } from 'react-icons/fa6';

export type RHFTextFieldProps<T extends FieldValues = FieldValues> = {
  name: Path<T>; 
  control: Control<T>; 
  errors: FieldErrors<T>; 
  label?: string; // 
  placeholder?: string; 
  type?: string; 
  icon?: IconType;
  rules?: object;
  className?: string; 
  textFieldProps?: Partial<TextFieldProps>;
};

export default function RHFTextField<T extends FieldValues = FieldValues>({
  name,
  control,
  errors,
  label = '',
  placeholder = '',
  type = 'text',
  icon: Icon = FaRegUser,
  rules = {},
  className = '',
  textFieldProps = {},
}: RHFTextFieldProps<T>) {

  const errorMessage = errors[name]?.message as string | undefined;
  const hasError = !!errorMessage;

  return (
    <div className={`w-full ${className}`}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextField
            {...textFieldProps}
            error={hasError}
            className="w-full"
            inputProps={{ style: { textAlign: 'right' } }}
            onChange={onChange}
            placeholder={placeholder}
            value={value || ''}
            type={type}
            label={label}
            id={name}
            slotProps={{
              input: {
                startAdornment: Icon && (
                  <InputAdornment className="h-full !p-0" position="start">
                    <Icon className="h-7" />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
      {hasError && (
        <FormHelperText className="w-full pr-3 text-right text-error-main">
          {errorMessage}
        </FormHelperText>
      )}
    </div>
  );
}
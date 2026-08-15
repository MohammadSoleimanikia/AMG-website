import { Controller, useFormContext } from 'react-hook-form';
import { TextField, type TextFieldProps } from '@mui/material';

type Props = Omit<TextFieldProps, 'name' | 'type' | 'onChange'> & {
  name: string;
};

const toEnglishDigits = (value: string) => {
  return value
    .replace(/[۰-۹]/g, (char) =>
      String(char.charCodeAt(0) - '۰'.charCodeAt(0))
    )
    .replace(/[٠-٩]/g, (char) =>
      String(char.charCodeAt(0) - '٠'.charCodeAt(0))
    );
};

export default function RHFPhone({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          type="tel"
          value={field.value ?? ''}
          slotProps={{
            htmlInput: {
              maxLength: 11,
              inputMode: 'numeric',
            },
            
          }}
          onChange={(event) => {
            const value = toEnglishDigits(event.target.value)
              .replace(/\D/g, '')
              .slice(0, 11);
            field.onChange(value);
          }}
          
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
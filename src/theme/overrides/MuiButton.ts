import { alpha, Theme } from '@mui/material/styles';
import { Components } from '@mui/material/styles';

export default function MuiButton(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 12px 10px 12px',
          boxShadow: 'none',
          borderRadius: '10px',
        },
      },
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      variants: [
        {
          props: { variant: 'text' },
          style: {
            ':hover': {
              backgroundColor: 'unset',
            },
          },
        },
        {
          props: { color: 'primary' },
          style: {
            ':hover': {
              boxShadow: 'none',
              backgroundColor: alpha(theme.palette.primary.main, 0.8),
            },
          },
        },
      ],
    } as Components<Theme>['MuiButton'],
  };
}

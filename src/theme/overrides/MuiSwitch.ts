import { Theme } from '@mui/material';

export default function MuiSwitch(theme: Theme) {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 60,
          height: 34,
          padding: 0,
        },
        switchBase: {
          padding: 0,
          margin: 3,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(26px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: `${theme.palette.primary.main}`,
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: `${theme.palette.primary.main}`,
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.grey[100],
            ...(theme.palette.mode === 'dark' && {
              color: theme.palette.grey[600],
            }),
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
            ...(theme.palette.mode === 'dark' && {
              opacity: 0.3,
            }),
          },
        },
        thumb: {
          boxSizing: 'border-box',
          width: 26,
          height: 26,
        },
        track: {
          borderRadius: '90px',
          backgroundColor: '#E9E9EA',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
          ...(theme.palette.mode === 'dark' && {
            backgroundColor: theme.palette.grey[500],
          }),
        },
      },
    },
  };
}

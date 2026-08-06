import { Components, Theme } from '@mui/material/styles';

export default function MuiCard(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          padding: '40px',
          borderRadius: '25px',

          [theme.breakpoints.down('md')]: {
            padding: '20px',
          },
        },
      },
    } as Components<Theme>['MuiCard'],
  };
}

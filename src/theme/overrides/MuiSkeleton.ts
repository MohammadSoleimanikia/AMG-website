import { Components, Theme } from '@mui/material/styles';

export default function MuiSkeleton(theme: Theme) {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: `
              linear-gradient(
                90deg,
                transparent,
                ${theme.palette.grey[60048]},
                transparent
              )
            `,
          },
        },
      },
    } as Components<Theme>['MuiSkeleton'],
  };
}

import { Theme } from '@mui/material/styles';
import { Components } from '@mui/material/styles';




export default function MuiIconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
          color: theme.palette.text.primary,
        },
      },
      variants: [
        {
          props: { color: 'error' },
          style: {
            '& .MuiTouchRipple-root': {
              color: theme.palette.error.light,
            },
          },
        },
        {
          props: { color: 'warning' },
          style: {
            '& .MuiTouchRipple-root': {
              color: theme.palette.warning.light,
            },
          },
        },
        {
          props: { color: 'success' },
          style: {
            '& .MuiTouchRipple-root': {
              color: theme.palette.success.light,
            },
          },
        },
        {
          props: { color: 'primary' },
          style: {
            '& .MuiTouchRipple-root': {
              color: theme.palette.primary.light,
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            '& .MuiTouchRipple-root': {
              color: theme.palette.secondary.light,
            },
          },
        },
        {
          props: { color: 'default' },
          style: {
            '& .MuiTouchRipple-root': {
              color: theme.palette.grey[300],
            },
          },
        },
        {
          props: { color: 'info' },
          style: {
            '& .MuiTouchRipple-root': {
              color: theme.palette.info.light,
            },
          },
        },
      ],
    } as Components<Theme>['MuiIconButton'],
  };
}

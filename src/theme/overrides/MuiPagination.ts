import { Components, Theme } from '@mui/material/styles';

export default function MuiPagination(theme: Theme) {
  return {
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            width: 32,
            height: 32,
            padding: '8px 12px',
            borderRadius: '50%',
            fontSize: '0.875rem',
            minWidth: 'auto',
          },
          '& .MuiPaginationItem-previousNext': {
            padding: '8px 12px',
            borderRadius: '90px',
            width: 44,
            height: 32,
          },
          '& .MuiPaginationItem-root:not(.Mui-selected)': {
            // border: '1.5px dashed',
            // borderColor: theme.palette.grey[300],
            transition: 'background 0.2s, color 0.2s',
            '&:hover': {
              backgroundColor: theme.palette.grey[200],
              color: theme.palette.grey[800],
              border: 'none',
            },
          },
        },
      },
    } as Components<Theme>['MuiIconButton'],
  };
}

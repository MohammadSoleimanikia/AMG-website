import { Components, Theme } from "@mui/material/styles";

export default function MuiContainer(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          },

          [theme.breakpoints.between('md', 'lg')]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
          },
        },
      },
    } as Components<Theme>["MuiContainer"],
  };
}

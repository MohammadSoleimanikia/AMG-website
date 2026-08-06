'use client';

import { alpha, CssBaseline, ThemeProvider as Provider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';
import BreakPoints from './breakpoints';
import typography from '@/theme/typography';
import palette from '@/theme/palette';
import shadows, { customShadows } from '@/theme/shadows';
import useSettings from '@/hooks/useSettings';
import ComponentsOverrides from '@/theme/overrides';

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const { themeMode, setColor } = useSettings();

  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight
        ? {
            ...palette.light,
            primary: setColor,
          }
        : {
            ...palette.dark,
            primary: setColor,
          },
      typography,
      breakpoints: {
        values: BreakPoints,
      },
      direction: 'rtl',
      shape: { borderRadius: 8 },
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight
        ? {
            ...customShadows.light,
            primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
          }
        : {
            ...customShadows.dark,
            primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
          },
      cssVariables: true,
    }),
    [isLight, setColor],
  );

  const theme = createTheme(themeOptions);

  /* @ts-ignore */
  theme.components = ComponentsOverrides(theme);

  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
}

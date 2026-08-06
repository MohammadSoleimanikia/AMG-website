"use client";

import { createContext, type ReactNode } from "react";
import getColorPresets, {
  colorPresets,
  defaultPreset,
} from "@/utils/getColorPresets";
import {
  type ThemeColorPresets,
  type SettingsContextProps,
  ThemeMode,
  SettingsValueProps,
  ThemeModeKey,
  ThemeColorPresetsKey,
} from "@/_types/_settings";
import { defaultSettings } from "@/utils/config";
import useCookie from "@/hooks/useCookie";

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},

  // Color
  onChangeColor: () => {},
  setColor: defaultPreset,
  colorOption: [],

  // Reset
  onResetSetting: () => {},
};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  defaultSettingsProps: SettingsValueProps;
  children: ReactNode;
};

function SettingsProvider({
  defaultSettingsProps,
  children,
}: SettingsProviderProps) {
  // themeMode
  const [themeMode, updateThemeMode] = useCookie(
    ThemeModeKey,
    defaultSettingsProps.themeMode,
    { expires: 400 }
  ) as [
    ThemeMode,
    (newValue: string, options?: Cookies.CookieAttributes) => void,
    any,
  ];

  // themeColorPresets
  const [themeColorPresets, updateThemeColorPresets] = useCookie(
    ThemeColorPresetsKey,
    defaultSettingsProps.themeColorPresets,
    { expires: 400 }
  ) as [
    ThemeColorPresets,
    (newValue: string, options?: Cookies.CookieAttributes) => void,
    any,
  ];

  // Mode

  const onToggleMode = () => {
    updateThemeMode(themeMode === "light" ? "dark" : "light", {
      expires: 400,
    });
  };

  // Color

  const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateThemeColorPresets(
      (event.target as HTMLInputElement).value as ThemeColorPresets,
      { expires: 400 }
    );
  };

  // Reset

  const onResetSetting = () => {
    updateThemeMode(initialState.themeMode, { expires: 400 });
    updateThemeColorPresets(initialState.themeColorPresets, { expires: 400 });
  };

  return (
    <SettingsContext
      value={{
        themeMode: themeMode,
        themeColorPresets: themeColorPresets,
        // Mode
        onToggleMode,

        // Color
        onChangeColor,
        setColor: getColorPresets(themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),

        // Reset
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext>
  );
}

export { SettingsProvider, SettingsContext };

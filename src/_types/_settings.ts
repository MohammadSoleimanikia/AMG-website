type ColorVariants = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type ThemeMode = "light" | "dark";
export type ThemeColorPresets =
  | "default"
  | "purple"
  | "cyan"
  | "blue"
  | "orange"
  | "red";

export const ThemeModeKey = "themeMode";
export const ThemeColorPresetsKey = "themeColorPresets";

export type SettingsValueProps = {
  themeMode: ThemeMode;
  themeColorPresets: ThemeColorPresets;
};

export type SettingsContextProps = {
  themeMode: ThemeMode;
  themeColorPresets: ThemeColorPresets;
  setColor: ColorVariants;
  colorOption: {
    name: string;
    value: string;
  }[];

  // Mode
  onToggleMode: VoidFunction;

  // Color
  onChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Reset
  onResetSetting: VoidFunction;
};

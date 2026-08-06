import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  widget: string;
}

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    600_8: string;
    600_12: string;
    600_16: string;
    600_24: string;
    600_32: string;
    600_48: string;
    600_56: string;
    600_80: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#F5F9FF',
  light: '#E6F1FF',
  main: '#0070ff',
  dark: '#0047A3',
  darker: '#001F47',
};
const SECONDARY = {
  lighter: '#F0F2F5',
  light: '#CFDAE8',
  main: '#6D90B9',
  dark: '#303946',
  darker: '#1D232A',
};
const INFO = {
  lighter: '#E6F8FA',
  light: '#E6FCFF',
  main: '#00cae3',
  dark: '#0090A3',
  darker: '#006875',
};
const SUCCESS = {
  lighter: '#eafbf2',
  light: '#d6f2e9',
  main: '#07ca8a',
  dark: '#24AE66',
  darker: '#1C8750',
};
const WARNING = {
  lighter: '#FFF2E6',
  light: '#fff3dd',
  main: '#ffa500',
  dark: '#FF962E',
  darker: '#FF8000',
};
const ERROR = {
  lighter: '#fdebf3',
  light: '#ffd0d0',
  main: '#ff0000',
  dark: '#A30000',
  darker: '#470000',
};

const GREY = {
  0: '#FFFFFF',
  100: '#f8f9fa',
  200: '#e9ecef',
  300: '#dee2e6',
  400: '#ced4da',
  500: '#adb5bd',
  600: '#6c757d',
  700: '#495057',
  800: '#343a40',
  900: '#212529',
  600_8: alpha('#6c757d', 0.08),
  600_12: alpha('#6c757d', 0.12),
  600_16: alpha('#6c757d', 0.16),
  600_24: alpha('#6c757d', 0.24),
  600_32: alpha('#6c757d', 0.32),
  600_48: alpha('#6c757d', 0.48),
  600_56: alpha('#6c757d', 0.56),
  600_80: alpha('#6c757d', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  widget: 'linear-gradient(180deg, #FFFFFF 0%, #F2295B00 100%)',
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: '#fff' },
  warning: { ...WARNING, contrastText: '#fff' },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  action: {
    hover: GREY[600_8],
    selected: GREY[600_16],
    disabled: GREY[600_80],
    disabledBackground: GREY[600_24],
    focus: GREY[600_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  custom: {
    0: '#0070FF3B',
    1: '#AED1FF',
    2: '#E7F2FF',
    3: '#F3F8FF',
    4: '#2786FF',
    5: '#ffffffa1',
    6: '#ffffffad',
    7: '#ffffffc9',
    8: '#E3EFFA',
    9: '#141d265c',
    10: '#ffa5001f',
    11: '#3B5573',
    customGreen: '#16c79a',
    customLightGreen: '#a2e9d7 ',
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: '#141d26', secondary: '#556473', disabled: '#6d90b9' },
    background: { paper: '#fff', default: '#f2f6fc' },
    action: { active: GREY[600], ...COMMON.action },
    divider: GREY[600_24],
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: '#7E8999', disabled: '#ffffff80' },
    background: { paper: '#1b232d', default: '#1b232d' },
    action: { active: GREY[500], ...COMMON.action },
    divider: GREY[600_48],
  },
} as const;

export default palette;

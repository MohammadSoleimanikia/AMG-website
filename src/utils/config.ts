import type { SettingsValueProps } from '@/_types/_settings';

// ENV
// ----------------------------------------------------------------------
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
export const API_TEMP_URL = process.env.NEXT_PUBLIC_API_TEMP_URL || '';

export const API_ADMIN_LOCAL_URL = process.env.NEXT_PUBLIC_API_LOCAL_ADMIN || '';

export const API_ADMIN_LOCAL_KEY = process.env.NEXT_PUBLIC_ADMIN_HOST_API_KEY || '';

//
export const PATH_AFTER_LOGIN = '/';

// LAYOUT
// ----------------------------------------------------------------------

export const NAVBAR = {
  HEIGHT: 56,
  MOBILE_HEIGHT: 48,
  //
  DRAWER_WIDTH: 300,
  //
  PROFILE_WIDTH: 300,
  //
  MOBILE_APP_BAR_HEIGHT: 76,
};

export const HEADER = {
  DESKTOP_HEIGHT: 96,
  DESKTOP_FULL_HEIGHT: 116 + NAVBAR.HEIGHT,
  DESKTOP_OFFSET_HEIGHT: 80,
  //
  MOBILE_HEIGHT: 64,
  MOBILE_FULL_HEIGHT: 76 + NAVBAR.MOBILE_HEIGHT,
  //
  PROFILE_HEIGHT: 74,
};

export const FILTER_DRAWER_WIDTH = 320;
export const CART_DRAWER_WIDTH = 360;

// SCROLLBAR STYLES
//-----------------------------------------------------------------------
export const scrollBarStyles = `
scrollbar-track-rounded-full scrollbar-track-hover:bg-common-white
scrollbar-thumb-rounded-xl  scrollbar-thumb-grey-400
scrollbar-thin
`;

// SETTINGS
// ----------------------------------------------------------------------

export const defaultSettings: SettingsValueProps = {
  themeMode: 'light',
  themeColorPresets: 'default',
};

// CART CONFIG
export const minCount = 1;
export const maxCount = 10000;

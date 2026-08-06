import { pxToRem, responsiveFontSizes } from "@/utils/getFontValue";

// ----------------------------------------------------------------------

const typography = {
  fontFamily: "Yekan_Bakh, roboto",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 700,
    lineHeight: 1.4,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 23, md: 24, lg: 25 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(19),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(19),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(15),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(15),
  },
  body2: {
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  button: {
    lineHeight: 1.7,
    fontSize: pxToRem(16),
  },
} as const;

export default typography;

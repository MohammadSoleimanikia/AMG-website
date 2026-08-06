export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:576px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:768px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:992px)": {
      fontSize: pxToRem(lg),
    },
  };
}

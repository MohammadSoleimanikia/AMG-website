export function createGradient(
  color1: string,
  color2: string,
  to: 'bottom' | 'top' | 'left' | 'right' = 'bottom',
) {
  return `linear-gradient(to ${to}, ${color1}, ${color2})`;
}

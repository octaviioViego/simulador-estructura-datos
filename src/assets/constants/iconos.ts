export const iconos = {
  Burbuja: new URL('../image/Burbuja.png', import.meta.url).href,
  BurbujaMejorado: new URL('../image/BurbujaMejorado.png', import.meta.url).href,
  Logo: new URL('../image/Logo.png', import.meta.url).href,

} as const;

export type IconName = keyof typeof iconos;
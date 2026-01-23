export const iconos = {
  Burbuja: new URL('../image/Burbuja.png', import.meta.url).href,
  BurbujaMejorado: new URL('../image/BurbujaMejorado.png', import.meta.url).href,
  Logo: new URL('../image/Logo.png', import.meta.url).href,
  BurbujaBidireccional: new URL('../image/BurbujaBidireccional.png', import.meta.url).href,
  OrdenamientoSeleccion:new URL('../image/OrdenamientoSeleccion.png', import.meta.url).href,
  OrdenamientoInsertar:new URL('../image/OrdenamientoInsertar.png', import.meta.url).href,

} as const;

export type IconName = keyof typeof iconos;



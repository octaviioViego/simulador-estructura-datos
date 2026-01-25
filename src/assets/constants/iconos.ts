export const iconos = {
  Burbuja: new URL('../image/Burbuja.png', import.meta.url).href,
  BurbujaMejorado: new URL('../image/BurbujaMejorado.png', import.meta.url).href,
  Logo: new URL('../image/Logo.png', import.meta.url).href,
  BurbujaBidireccional: new URL('../image/BurbujaBidireccional.png', import.meta.url).href,
  OrdenamientoSeleccion: new URL('../image/OrdenamientoSeleccion.png', import.meta.url).href,
  OrdenamientoInsertar: new URL('../image/OrdenamientoInsertar.png', import.meta.url).href,
  OrdenamientoShell: new URL('../image/OrdenamientoShell.png', import.meta.url).href,
  Github: new URL('../image/Github.png', import.meta.url).href,
  Menu: new URL('../image/Menu.png', import.meta.url).href,
  Algoritmos: new URL('../image/Algoritmo.png', import.meta.url).href,
  EstructuraDatos: new URL('../image/EstructuraDatos.png', import.meta.url).href,
} as const;

export type IconName = keyof typeof iconos;


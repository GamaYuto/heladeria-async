// types.ts

export type Tamano = 'pequeno' | 'mediano' | 'grande';

export interface Pedido {
  id: number;
  sabor: string;
  tamano: Tamano;
  toppings?: string[];
  precio: number;
  estado: 'pendiente' | 'preparando' | 'listo';
  notas?: string;
}
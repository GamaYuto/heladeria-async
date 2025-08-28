// Heladeria.ts

import { Pedido, Tamano } from './types';

export class Heladeria {
  private pedidos: Pedido[] = [];
  private ultimoId: number = 0;
  private iva: number;

  constructor(iva: number = 0.19) {
    this.iva = iva;
  }


  private getPrecioBase = (tamano: Tamano): number => {
    const precios = {
      pequeno: 8,
      mediano: 10,
      grande: 12,
    };
    return precios[tamano];
  };

  calcularPrecio = (base: number, toppings: string[] = []): number => {
    return base * (1 + this.iva) + toppings.length * 0.5;
  };

  crearPedido = (sabor: string, tamano: Tamano = 'mediano', toppings?: string[], notas: string = ''): Pedido => {
    this.ultimoId++;

    const precioBase = this.getPrecioBase(tamano);
    
    
    const precioFinal = this.calcularPrecio(precioBase, toppings ?? []);

    const nuevoPedido: Pedido = {
      id: this.ultimoId,
      sabor,
      tamano,
      toppings,
      precio: parseFloat(precioFinal.toFixed(2)),
      estado: 'pendiente',
      notas,
    };
    this.pedidos.push(nuevoPedido);
    return nuevoPedido;
  };

  prepararPedido = (id: number, ms: number = 1000): Promise<Pedido> => {
    return new Promise((resolve, reject) => {
      const pedido = this.pedidos.find(p => p.id === id);
      if (!pedido) {
        return reject(new Error(`Pedido con id ${id} no encontrado.`));
      }
      pedido.estado = 'preparando';
      setTimeout(() => {
        pedido.estado = 'listo';
        resolve(pedido);
      }, ms);
    });
  };

  listarPedidos = (filtro?: { estado?: Pedido['estado']; texto?: string }): Pedido[] => {
    let pedidosFiltrados = this.pedidos;
    if (!filtro) {
      return pedidosFiltrados;
    }
    if (filtro.estado) {
      pedidosFiltrados = pedidosFiltrados.filter(p => p.estado === filtro.estado);
    }
    if (filtro.texto) {
      const textoBusqueda = filtro.texto.toLowerCase();
      pedidosFiltrados = pedidosFiltrados.filter(p =>
        p.sabor.toLowerCase().includes(textoBusqueda) ||
        (p.notas && p.notas.toLowerCase().includes(textoBusqueda))
      );
    }
    return pedidosFiltrados;
  };

  getPedido = (id: number): Pedido | undefined => {
    return this.pedidos.find(p => p.id === id);
  };
}
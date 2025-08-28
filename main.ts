// main.ts

import { Heladeria } from './Heladeria';

const heladeria = new Heladeria();

async function main() {
  console.log('--- CREACIÓN DE PEDIDOS ---');
  const pedido1 = heladeria.crearPedido('Vainilla');
  const pedido2 = heladeria.crearPedido('Chocolate', 'grande', ['nueces', 'caramelo']);
  const pedido3 = heladeria.crearPedido('Fresa', undefined, undefined, 'Sin azucar');

  console.log('\n--- LISTADO DE PEDIDOS ---');
  console.log('Todos los pedidos:');
  console.log(heladeria.listarPedidos());

  console.log('\n--- PREPARACIÓN ASÍNCRONA (async/await) ---');
  console.log('Preparando pedido 1...');
  const pedidoListo = await heladeria.prepararPedido(pedido1.id, 2000);
  console.log('Estado del pedido 1 después de la preparación:', pedidoListo.estado);

  console.log('\n--- USO DE .then()/.catch() ---');
  console.log('Preparando pedido 2...');
  heladeria.prepararPedido(pedido2.id)
    .then(pedidoActualizado => {
      console.log('Pedido 2 listo:', pedidoActualizado.estado);
    })
    .catch(error => {
      console.error('Ocurrió un error:', error.message);
    });

  console.log('\n--- LISTADO CON FILTROS ---');
  console.log('Pedidos pendientes:');
  console.log(heladeria.listarPedidos({ estado: 'pendiente' }));
  console.log('\nPedidos que contienen "azucar":');
  console.log(heladeria.listarPedidos({ texto: 'azucar' }));

  console.log('\n--- GESTIÓN DE ERROR ---');
  console.log('Intentando preparar un pedido que no existe (id: 99)...');
  heladeria.prepararPedido(99)
    .catch(error => {
      console.error(`Error: ${error.message}`);
    });
}

main();
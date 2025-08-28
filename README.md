# 🍦 Heladería Asíncrona

Este proyecto es una miniaplicación de consola desarrollada en TypeScript que simula la gestión de pedidos en una heladería. El objetivo principal es demostrar el uso de características modernas de JavaScript/TypeScript, incluyendo la programación asíncrona con Promesas y `async/await`.

## ✨ Características

  * **Creación de Pedidos**: Permite crear pedidos de helados especificando sabor, tamaño, toppings y notas adicionales.
  * **Cálculo de Precios**: Calcula automáticamente el precio final del pedido, incluyendo un IVA configurable y el costo adicional de los toppings.
  * **Preparación Asíncrona**: Simula el tiempo de preparación de un pedido de forma asíncrona, actualizando su estado de `pendiente` a `preparando` y finalmente a `listo`.
  * **Listado y Filtrado**: Ofrece la capacidad de listar todos los pedidos o filtrarlos por su estado (ej. 'pendiente') o por un texto de búsqueda.
  * **Manejo de Promesas**: Demuestra el uso de `async/await` y `.then()/.catch()` para manejar operaciones asíncronas.

## 🛠️ Tecnologías Utilizadas

  * **TypeScript**: Para un código JavaScript tipado, robusto y escalable.
  * **Node.js**: Como entorno de ejecución.
  * **ts-node**: Para ejecutar el código TypeScript directamente sin una compilación manual previa.

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

**1. Prerrequisitos**
Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

**2. Clona el repositorio**

```bash
git clone <URL-DE-TU-REPOSITORIO>
cd heladeria-async
```

**3. Instala las dependencias**
Este proyecto utiliza `typescript` y `ts-node` como dependencias de desarrollo.

```bash
npm install
```

**4. Ejecuta el script**
El archivo `main.ts` contiene la demostración de la funcionalidad. Para ejecutarlo, usa el siguiente comando:

```bash
npx ts-node main.ts
```

Verás en la consola la salida de la creación, listado y preparación de los pedidos.

## 📂 Estructura del Proyecto

```
.
├── Heladeria.ts      # Contiene la clase principal con toda la lógica de negocio.
├── main.ts           # Punto de entrada de la aplicación y script de demostración.
├── package.json      # Define el proyecto y sus dependencias.
├── README.md         # La documentación del proyecto.
├── tsconfig.json     # Configuración del compilador de TypeScript.
└── types.ts          # Define las interfaces y tipos (ej. Pedido, Tamano).
```

## ✒️ Autor

  * **Oswaldo Rafael Gamarra Salinas** - *Desarrollador del miniproyecto*

-----

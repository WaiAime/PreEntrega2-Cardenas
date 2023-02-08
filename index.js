// const miCarrito = [
//   { nombre: "arroz", precio: 150 },
//   { nombre: "harina", precio: 120 },
//   { nombre: "leche", precio: 200 },
// ];

// function buscarProducto(arr, string) {
//   return arr.find((el) => {
//     return el.nombre.include(string);
//   });
// }

// function agregarCantidad(arr, cantidad, product) {
//   cantidad = prompt("Ingrese Cantidad");
//   while (!cantidad) {
//     // 0 false, != 0 es verdadero, null es falso, para undefined es falso
//   }
//   for (let i = 0; i < cantidad; i++) {
//     arr.push(product);
//   }
// }

// function agregarAlCarrito(arr, opcion) {
//   let cantidad = 0;
//   switch (opcion) {
//     case "arroz":
//       const arroz = new Product({ nombre: "arroz", precio: 150 });
//       agregarCantidad(arr, cantidad, arroz);
//       break;
//     case "harina":
//       const harina = new Product({ nombre: "harina", precio: 120 });
//       agregarCantidad(arr, cantidad, harina);
//   }
// }

// agregarAlCarrito(miCarrito, new Producto({ nombre: "arroz", precio: 150 }));

// let total = 0; // acumulador

// miCarrito.forEach((el) => {
//   console.log(el);
//   total += el.precio; // total = total+el.precio
// });

// console.log(total);

const mostrarCarrito = () => {
  let mensaje = `Carrito:`;
  Carrito.forEach((el, index) => {
    mensaje += `
                ${index + 1}- ${el.nombre} $${el.precio}
            `;
  });
  alert(mensaje);
};

const mostrarCatalogo = () => {
  let mensaje = `Productos:
                  Seleccione el codigo para agregar al carrito
    `;
  Productos.forEach((el, index) => {
    mensaje += `
              ${index + 1}- ${el.nombre} $${el.precio}
          `;
  });
  let opcion = parseInt(prompt(mensaje));
  Carrito.push(Productos[opcion - 1]); // agregamos al carrito un producto seleccionado a travez de su indice
};

const mostrarTotal = () => {
  let total = 0;
  Carrito.forEach((el) => {
    total += el.precio;
  });
  alert(" Su total por ahora es: " + total);
};

const Carrito = [];
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const arroz = new Producto("arroz", 150);
const leche = new Producto("leche", 120);
const harina = new Producto("harina", 100);

const Productos = [arroz, leche, harina];

let opcion = parseInt(
  prompt(`Hola, Bienvenido, que desea hacer?  
                            1- Ver Catalogo 
                            2- Ver Carrito 
                            3- Ver Total 
                            4- Salir  
`)
);

while (opcion !== 4) {
  switch (opcion) {
    case 1:
      mostrarCatalogo();
      break;
    case 2:
      mostrarCarrito();
      break;
    case 3:
      mostrarTotal();
      break;
    default:
      break;
  }
  opcion = parseInt(
    prompt(`Hola, Bienvenido, que desea hacer?  
                              1- Ver Catalogo 
                              2- Ver Carrito 
                              3- Ver Total 
                              4- Salir  
  `)
  );
  if (opcion == 4) {
    alert("Hasta luego");
  }
}

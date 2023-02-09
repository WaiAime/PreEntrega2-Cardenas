
alert("Bienvide a la tienda de Mai!") //texto a cambiar

const verServicios = () => {
  let mensaje = `Ingresa el codigo de la sesión deseada para agregarla a tu compra`;
  Productos.forEach((el, index) => {
    mensaje += `
    ${index + 1}) ${el.nombre} $${el.precio} ${el.duracion}
          `;
  });
  let menu = parseInt(prompt(mensaje));
  Carrito.push(Productos[menu - 1]); 
};

const verElegidos = () => {
  let mensaje = `Hasta ahora elegiste: `;
  Carrito.forEach((el, index) => {
    mensaje += `
                ${index + 1}. ${el.nombre} $${el.precio} ${el.duracion}
            `;
  });
  alert(mensaje);
};

const totalCompra = () => {
  let total = 0;
  Carrito.forEach((el) => {
    total += el.precio;  });
  alert("Monto Total: $" + total + " Hay 10% de descuento por pago efectivo!"); 
  let medioDePago= prompt(`Abonas en efectivo? 1. Si  2. No`);
  if (medioDePago==1){
    console.log("Descuento aplicado. Total $"+ (total/1.10));
    alert("Nuevo total $"+ (total/1.10));
  }
  else{
    alert("Monto Total: $" + total);
  };
};

const Carrito = [];
class Producto {
  constructor(nombre, precio, duracion) {
    this.nombre = nombre;
    this.precio = precio;
    this.duracion=duracion;
  }
}

const masajeTailandes = new Producto("Masaje Tailandés", 3000, "  Duración del masaje 1hr");
const reiki = new Producto("Reiki", 2500, "  Duración de la sesión 50 min");
const terapiaSacrouterina = new Producto("Terapia Sacrouterina", 2800, "  Duración de la terapia 1hs 30min");
const registrosAkashicos = new Producto("Registros Akashicos", 2200, "  Duración 1hr");
const ritoDelUtero = new Producto("Rito del Utero", 2800, "  Duración 2hs")

const Productos = [masajeTailandes, reiki, terapiaSacrouterina, registrosAkashicos, ritoDelUtero];

let menu = parseInt(
  prompt(`Ingresá el nro de la opción deseada  
                            1. Sesiones Disponibles
                            2. Mis Elegidos
                            3. Total Compra 
                            4. Finalizar  
`)
);

while (menu !== 4) {
  switch (menu) {
    case 1:
      verServicios();
      break;
    case 2:
      verElegidos();
      break;
    case 3:
      totalCompra();
      break;
    default:
      break;
  }
  menu = parseInt(
    prompt(`Ingresá el nro de la opción deseada  
    1. Sesiones Disponibles
    2. Mis Elegidos
    3. Total Compra 
    4. Finalizar  
`)
  );
  if (menu == 4) {
    console.log= prompt(`Ingresá tu nombre para el turno`);
    alert("Gracias por tu compra, te contactaremos a la brevedad para coordinar tu sesión");
  }
}




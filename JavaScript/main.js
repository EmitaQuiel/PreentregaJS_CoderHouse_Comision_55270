function solicitarValor(promptMensaje) {
  const valor = prompt(promptMensaje);
  while (!valor) {
    alert("¡Debe ingresar un valor!");
    valor = prompt(promptMensaje);
  }
  return valor;
}

let continuar = true;
while (continuar) {
  const nombrePersona = solicitarValor("Ingrese su nombre: ");
  const codigo = solicitarValor("Ingrese el código del producto");
  const nombre = solicitarValor("Ingrese el nombre del producto");

  let cantidad;
  for (;;) {
    cantidad = parseInt(solicitarValor("Ingrese la cantidad del producto"));
    if (!isNaN(cantidad) && cantidad <= 100) {
      break;
    }
    if (isNaN(cantidad)) {
      alert("Debe ingresar un valor numérico para la cantidad");
    } else {
      alert("La cantidad no puede ser mayor a 100");
    }
  }

  let precio;
  for (;;) {
    precio = parseInt(solicitarValor("Ingrese el precio del producto"));
    if (!isNaN(precio)) {
      break;
    }
    alert("Debe ingresar un valor numérico para el precio");
  }

  let precioPagar, precioFinal, descuento;
  if (precio >= 5000 && precio <= 10000) {
    descuento = precio - precio * 0.02;
    precioPagar = descuento * cantidad;
    precioFinal = precioPagar + precioPagar * 0.13;
  } else if (precio >= 10000 && precio <= 15000) {
    descuento = precio - precio * 0.05;
    precioPagar = descuento * cantidad;
    precioFinal = precioPagar + precioPagar * 0.13;
  } else {
    descuento = precio - precio * 0.07;
    precioPagar = descuento * cantidad;
    precioFinal = precioPagar + precioPagar * 0.13;
  }

  alert("Bienvenido a nuestro sistema de facturación, " + nombrePersona);
  alert(`
  ╔══════════════════════╗
  ║   Sistema de Facturación   
  ╠══════════════════════╣
  ║ Código: ${codigo}    
  ║ Nombre: ${nombre}    
  ║ Cantidad: ${cantidad}
  ║ Precio Unitario: ${precio}    
  ║ Total a pagar: ${precioFinal}    
  ╚══════════════════════╝
  `);

  let eleccionUsuario = "";
  while (eleccionUsuario !== "1") {
    eleccionUsuario = prompt("¿Desea: \n 1-Salir o 2-Repetir?");

    switch (eleccionUsuario) {
      case "1":
        alert("Hasta luego. ¡Adiós!");
        continuar = false;
        break;

      case "2":
        alert("Repitiendo proceso...");
        eleccionUsuario = "1";
        break;

      default:
        alert(
          'Opción inválida. Por favor, elija "salir" o "continuar".'
        );
        break;
    }
  }
}
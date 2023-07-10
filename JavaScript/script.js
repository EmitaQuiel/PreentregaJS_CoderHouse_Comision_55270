
function solicitarValor(promptMensaje) {
    let valor = prompt(promptMensaje);
    while (!valor) {
    alert("¡Debe ingresar un valor!");
    valor = prompt(promptMensaje);
    }

    return valor;
}

let nombrePersona = solicitarValor("Ingrese su nombre: ")
let codigo = solicitarValor("Ingrese el codigo del producto");
let nombre = solicitarValor("Ingrese el nombre del producto");

let cantidad = parseInt(solicitarValor("Ingrese la cantidad del producto"));
while (isNaN(cantidad) || cantidad > 100) {
    if (isNaN(cantidad)) {
    alert("Debe ingresar un valor numérico para la cantidad");
    } else {
    alert("La cantidad no puede ser mayor a 100");
    }
    cantidad = Number(solicitarValor("Ingrese una nueva cantidad"));
}

let precio = parseInt(solicitarValor("Ingrese el precio del producto"));
while (isNaN(precio)) {
    alert("Debe ingresar un valor numérico para el precio");
    precio = Number(solicitarValor("Ingrese un nuevo precio"));
}

let mensaje;
function bienvenida(mensaje){
    alert( mensaje + nombrePersona);
}

//si el precio es mayor a 5000 colones se le hace un descuento del 2%, si es mayor a 10000 colones un 5% y si es mayor a 15000 colones un 7%. 
//el precio final contiene el 13% de IVA (Costa Rica)
function calcularPrecioFinal(){
    let precioPagar, precioFinal, descuento;
    if(precio >= 5000 && precio <= 10000){
        descuento =  precio - (precio * 0.02);
        precioPagar= (descuento * cantidad);
        precioFinal = precioPagar + precioPagar * 0.13;
    }
    else if(precio >= 10000 && precio <= 15000){
        descuento = precio - (precio * 0.05);
        precioPagar= descuento * cantidad;
        precioFinal = precioPagar + (precioPagar * 0.13);
    }
    else{
        descuento = precio - (precio * 0.07);
        precioPagar= descuento * cantidad;
        precioFinal = precioPagar + (precioPagar * 0.13);
    }
    return precioFinal;
}

bienvenida("Bienvenido a nuestro sistema de facturacion, ");
alert("Codigo: " + codigo + " || Nombre: " + nombre + " || Cantidad: " + cantidad + "\n || Precio Unitario: " + precio +" || Total a pagar: " + calcularPrecioFinal());

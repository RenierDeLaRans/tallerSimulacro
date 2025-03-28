// Requerimiento 01 - Función caja()
let total = 0;
function imprimaProducto(nombre, precio) {
    console.log(`Producto: ${nombre}, Precio: $${precio}`);
}
function caja() {
    let continuar = true;
    while (continuar) {
        let nombre = prompt("Ingrese el nombre del producto:");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        imprimaProducto(nombre, precio);
        total += precio;
        let masProductos = prompt("¿Tiene más artículos a ingresar? (Si/No)").toLowerCase();
        if (masProductos !== "si") {
            continuar = false;
        }
    }
    console.log(`Total a pagar: $${total}`);
}

// Requerimiento 02 - Función requerimientoDos()
function numAleatorio() {
    let num = Math.floor(Math.random() * 31) + 100;
    while (num === 110 || num === 115 || num === 120) {
        num = Math.floor(Math.random() * 31) + 100;
    }
    return num;
}

function numeros() {
    let contador = 0;
    let num;

    while (contador < 10) {
        if (contador % 2 === 0) {
            do {
                num = numAleatorio();
            } while (num % 2 !== 0);
        } else {
            do {
                num = numAleatorio();
            } while (num % 2 === 0);
        }

        console.log(num);
        contador++;
    }
}

function requerimientoDos() {
    numeros();
}

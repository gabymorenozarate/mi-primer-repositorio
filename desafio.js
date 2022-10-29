function comprarProductos() {
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Queres comprar juventud eterna parte1, juventud eterna parte2, armonizacion de chakras, decreta y concreta, tecnica de respiracion completa, o todos?', 'Ej: todos');
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'juventud eterna parte1':
                precio = 1000;
                break;
            case 'armonizacion de chakras':
                precio = 1000;
                break;
            case 'tecnica de respiracion completa':
                precio = 1000;
                break;
            case 'decreta y concreta':
                precio = 1000;
                break;
            case 'juventud eterna parte2':
                precio = 1000;
                break;
            case 'todos':
                precio = 4500;
                break;
            default:
                alert('Alguno de los datos ingresados no es correcto.');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;
        cantidadTotal += cantidad;

        seguirComprando = confirm('¿Queres agregar otra meditacion?');

    } while (seguirComprando)

    return totalCompra;
}

function validarCantidad(cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe agregar un número.')
        } else {
            alert('Debe ingresar un número distinto de cero.')
        }
        cantidad = parseInt(prompt('¿Cuantas meditaciones queres comprar?'));
    }

    return cantidad;
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 5000) {
        return totalCompra * 0.80;
    } else {
        return totalCompra;
    }
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Queres envio a domicilio?');

    if (tieneEnvioADomicilio && totalCompra >= 2000) {
        alert('Tenes envio gratis. El total de la compra es: ' + totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('El envío cuesta $700. El total de la compra es: ' + totalCompra);
    } else {
        alert('El total de la compra es: ' + totalCompra);
    }
}

calcularEnvio(aplicarDescuento(comprarProductos()));
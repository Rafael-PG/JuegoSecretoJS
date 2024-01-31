let numeroSecreto = 0;
let intentos = 0;
let numeroSorteado = [];
let numeroMaximo = 10;


console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroSecreto > numeroDeUsuario) {
        asignarTextoElemento('p', 'El número secreto es mayor');
    } else {
        asignarTextoElemento('p', 'El número secreto es menor');
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja() {

    document.getElementById('valorUsuario').value = '';

}
function condicionesInciiales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1
}

function nuevoJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicamos mensaje de intervalo
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesInciiales();
    //Deshabilitar el boton del nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
condicionesInciiales();
function generarNumeroAleatorio() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //Si el numero generado esta incluido en la lista
    if (numeroSorteado == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {

    }
    if (numeroSorteado.includes(numeroGenerado)) {
        return generarNumeroAleatorio();
    } else {
        numeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }

}



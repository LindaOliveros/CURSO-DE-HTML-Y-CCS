let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // Activa el boton de nuevo juego. se complementa con la programacion en el HTML
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor');  
        } else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        LimpiarCaja();
    }
    return
}

function LimpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si ya sorteamos todos los numeros 
    if(listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    } else{
        // Si el numero creado esta incluido en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function CodicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto'); 
    asignarTextoElemento ('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja 
    LimpiarCaja();
    // indicar mensaje de intervalo de numero
    // generar el numero aleatorio 
    // Inicializar el numero de intentos 
    CodicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   

}

CodicionesIniciales();
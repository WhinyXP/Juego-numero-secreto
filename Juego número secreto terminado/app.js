let numSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numMax = 10;

console.log(numSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numUsuario === numSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        //Usuario no acertó
        if(numUsuario>numSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    let numGenerado = Math.floor(Math.random()*numMax)+1;

    console.log(numGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length === numMax){
        asignarTextoElemento('p', 'Ya se adivinaron todos los números existentes');
    }else{

        if(listaNumerosSorteados.includes(numGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica número del 1 al ${numMax}`);
    numSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar intervalo de numeros
    //Generar numero aleatorio
    //Reiniciar los intentos
    condicionesIniciales();
    //Deshabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
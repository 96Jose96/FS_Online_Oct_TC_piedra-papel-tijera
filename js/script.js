const arrOption = ['piedra', 'papel', 'tijera'];
let puntosUsuario = 0;
let puntosOrdenador = 0;
const botonJugada = document.querySelectorAll('boton-jugada');
const resultados = document.getElementById('resultados');
let contadorUsuario = document.getElementById('contador-usuario');
let contadorOrdenador = document.getElementById('contador-ordenador');

botonJugada.forEach(button => {
    botonJugada.addEventListener('click', function() {
        const jugadaUsuario = botonJugada;
        const jugadaOrdenador = jugadaOrdenador();
        const resultado = obtenerResultado (contadorUsuario, contadorOrdenador);
        mostrarResultado(contadorUsuario, contadorOrdenador, resultado);
    });
    
});

console.log(botonJugada);

function jugadaOrdenador(arrOption) {
    const aleatorio = arrOption[Math.floor(Math.random() * arrOption.length)];
    return aleatorio;

}


function obtenerResultado(eleccionUsuario, eleccionOrdenador) {
    const resultado= '';
    if (eleccionUsuario === eleccionOrdenador) {
        resultado = 'empate'
    } else if ((eleccionUsuario === 'piedra' && eleccionOrdenador === 'tijera') ||
    (eleccionUsuario === 'tijera' && eleccionOrdenador === 'papel') ||
    (eleccionUsuario === 'papel' && eleccionOrdenador === 'piedra')) {
        resultado = 'Ganaste'
    } else {
        resultado = 'Perdiste'
    }
}   

function mostrarResultado (contadorUsuario, contadorOrdenador, resultado) {
    resultadosDiv.innerHTML = "<p>ganaste</p>";
}































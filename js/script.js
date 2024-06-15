/*## Consejos

1. Revisa que es el dataset para acceder al valor de jugada de cada botón
2. Puedes usar un foreach en cada uno de los botónes
3. Usa Math.ramdom() para generar aleatoriedad
4. Adapta el HTML y CSS si lo ves necesario

## La estructura podría ser la siguiente:

- Opciones en un array
- Variables puntos usuario
- Variables puntos ordenador
- Capturar los botones para usarlos (plantea usar un forEach) y hacer evento click
- Capturar resultados
- Capturar contador-usuario
- Capturar contador-ordenador
- Crear una función obtenerResultado
- Crear una función mostrarResultado
- Crear una función actualizarPuntuacion*/

const arrOptions = ['piedra', 'papel', 'tijera'];
const buttons = document.querySelectorAll('.boton-jugada');
const resultados = document.getElementById('resultados');
let playerScore = document.getElementById('contador-usuario');
let machineScore = document.getElementById('contador-ordenador');

let puntosPlayer = 0;
let puntosMachine = 0;


//EVENTO BOTONES
buttons.forEach(boton => {
    boton.addEventListener ('click', function () {
        const playerMove = boton.dataset.jugada;
        const machineMove = machineRandomMove();
        const win = whoWin(playerMove, machineMove);
    })
})

//MOVIMIENTO ORDENADOR
function machineRandomMove() {
    const randomChoice = Math.floor(Math.random() * arrOptions.length);
    return arrOptions[randomChoice];
}


//FUNCION PARA VER EL GANADOR
function whoWin(playerMove, machineMove) {
    if (playerMove === machineMove) {
        return '¡Empate!'
    } else if (
        (playerMove === 'tijera' && machineMove === 'papel') ||
        (playerMove === 'piedra' && machineMove === 'tijera') ||
        (playerMove === 'papel' && machineMove === 'piedra')
    ) {
        return '¡Ganaste!'
    } else {
        return '¡Perdiste!'
    }
}

//ACTUALIZAR MARCADORES
function resultUpdate(win, playerMove, machineMove) {
    if (win === '¡Ganaste!') {
        resultados.innerHTLM = `Jugador jugó ${playerMove}, ordenador jugó ${machineMove}. ¡Ganas!`
        playerScore++;
    } else if (win === '¡Perdiste!') {
        resultados.innerHTLM = `Jugador jugó ${playerMove}, ordenador jugó ${machineMove}. ¡Pierdes!`
        machineScore++;
    } else {
        resultados.innerHTLM = `Jugador jugó ${playerMove}, ordenador jugó ${machineMove}. ¡Empate!`
    }
}

playerScore.textContent = puntosPlayer;
machineScore.textContent = puntosMachine;




























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
const buttons = document.querySelectorAll('.jugada');
const result = document.getElementById('resultados');
let playerScore = document.getElementById('contador-usuario');
let machineScore = document.getElementById('contador-ordenador');




function move(playerChoice, machineChoice) {
    if (playerChoice === machineChoice) {
        return 'Empate';
    } else if ((playerChoice === 'papel' && machineChoice === 'piedra') ||
        (playerChoice === 'piedra' && machineChoice === 'tijera') ||
        (playerChoice === 'tijera' && machineChoice === 'papel')) {
            return 'Ganaste'
    } else {
        return 'Perdiste'
    }   
}



buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = button.dataset.jugada;
        const machineChoice = arrOptions[Math.floor(Math.random() * arrOptions.length)];
        const moveResult = move(playerChoice, machineChoice);
        result.innerHTML(`<p>Jugador jugó: ${playerChoice}, máquina jugó: ${machineChoice}.¡¡¡${moveResult}!!!</p>`)
    })
})
































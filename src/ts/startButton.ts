import { Timer } from './timerFunction'; // Importera timer funktionen

export function setupStartButton(startButtonId: string, timeDisplayId: string) {
    const startButton = document.getElementById(startButtonId)!;
    const timeDisplay = document.getElementById(timeDisplayId);

    if (!startButton || !timeDisplay) {
        console.error('Could not find the start button or time display element.');
        return;
    }

    // Skapa en Timer-objekt med en måltid på 10 sekunder för testning
    const myTimer = new Timer(10, timeDisplay);

    // Funktioner som körs när spelet startar
    function startGame() {
        console.log('Spelet startas!');
        myTimer.start();  // Starta timern
    }

    // Eventlyssnare på knappen
    startButton.addEventListener('click', startGame);
}
import { Timer } from './timerFunction'; // Importera timer funktionen

export function setupStartButton(startButtonId: string, timeDisplayId: string) {
    const startButton = document.getElementById(startButtonId)!;
    const timeDisplay = document.getElementById(timeDisplayId);

    if (!startButton || !timeDisplay) {
        console.error('Could not find the start button or time display element.');
        return;
    }

    startButton.addEventListener('click', () => {
        startGame(timeDisplay);
    });
}

function startGame(timeDisplay: HTMLElement) {
    const myTimer = new Timer(10, timeDisplay);

    console.log('Spelet startar!');
    myTimer.start();  // Starta timern
}
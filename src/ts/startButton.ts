import { Timer } from './timerFunction';  // Importera timer-funktionen
import { getNextQuestion } from './questionCounter'; // Importerar räknaren för att stoppa spelomgången

export function setupStartButton(startButtonId: string, timeDisplayId: string) {
    const startButton = document.getElementById(startButtonId)!;
    const timeDisplay = document.getElementById(timeDisplayId);

    if (!startButton || !timeDisplay) {
        console.error('Could not find the start button or time display element.');
        return;
    }

    // Eventlyssnare på startknappen som startar spelet och triggar timern, ..............
    startButton.addEventListener('click', () => {
        const myTimer = new Timer(timeDisplay);  // Skapa Timer-objektet
        myTimer.start();  // Starta timern
        getNextQuestion(); // Startar counter funktion när spelet startar. 
        console.log('Spelet startas!');
    });
}

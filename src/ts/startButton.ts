import { Timer } from './timerFunction';  // Importera Timer-klassen

export function setupStartButton(startButtonId: string, timeDisplayId: string) {
    const startButton = document.getElementById(startButtonId)!;
    const timeDisplay = document.getElementById(timeDisplayId);

    if (!startButton || !timeDisplay) {
        console.error('Could not find the start button or time display element.');
        return;
    }

    // Eventlyssnare på startknappen som startar spelet och triggar timern, ..............
    startButton.addEventListener('click', () => {
        const myTimer = new Timer(10, timeDisplay);  // Skapa Timer-objektet
        console.log('Spelet startas!');
        myTimer.start();  // Starta timern
    });
}

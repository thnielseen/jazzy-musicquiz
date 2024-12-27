import { Timer } from './timerFunction';  // Importera timer-funktionen
import { getNextQuestion } from './questionCounter'; // Importerar räknaren för att stoppa spelomgången
import { quizQuestions, createGameQuestions } from './getQuizQuestions';
import { showGameSection } from './showAndHideSections';  

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
        createGameQuestions(quizQuestions); // Skapa frågor
        getNextQuestion(); // Startar counter funktion när spelet startar. 
        showGameSection(); // Gömmer intro och visar game section (frågorna)
        console.log('Spelet startas!');
    });
}

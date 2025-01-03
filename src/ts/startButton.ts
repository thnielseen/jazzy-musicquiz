import { Timer } from './timerFunction';  // Importera timer-funktionen
import {
    getNextQuestion,
    sessionCount  
} from './questionCounter'; // Importerar räknaren för att stoppa spelomgången
import {
    quizQuestions,
    createGameQuestions
} from './getQuizQuestions';
import { showGameSection } from './showAndHideSections';

export function setupStartButton(startButtonId: string, timeDisplayId: string) {
    const startButton = document.getElementById(startButtonId)!;
    const timeDisplay = document.getElementById(timeDisplayId);
    const usernameInput = document.getElementById('username') as HTMLInputElement;

    if (!startButton || !timeDisplay || !usernameInput) {
        console.error('Could not find the start button or time display element.');
        return;
    }

    // Eventlyssnare på startknappen som startar spelet och triggar timern, ..............
    startButton.addEventListener('click', () => {
        // Spara användarnamnet i localStorage
        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('username', username);
            console.log('Användarnamn sparades:', username);
        } else {
            console.error('Användarnamn är tomt. Skriv in ett giltigt namn.');
            return; // Stoppa om användarnamnet är tomt
        }

        // Starta spelet
        const myTimer = new Timer(timeDisplay);  // Skapa Timer-objektet
        myTimer.start();  // Starta timern
        createGameQuestions(quizQuestions, sessionCount); // Skapa frågor
        getNextQuestion(); // Startar counter funktion när spelet startar. 
        showGameSection(); // Gömmer intro och visar game section (frågorna)
        console.log('Spelet startas!');
    });
}

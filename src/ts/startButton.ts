//import { Timer } from './timerFunction';  // Importera timer-funktionen
import { getGameTimer } from './gameTimer';
import {
    getNextQuestion,
    sessionCount  
} from './questionCounter'; // Importerar räknaren för att stoppa spelomgången
import { createGameQuestions } from './getQuizQuestions';
import { quizQuestions } from './quizData';
import { showGameSection } from './showAndHideSections';

export function setupStartButton(startButtonId: string, timeDisplayId: string) {
    const startButton = document.getElementById(startButtonId)!;
    const timeDisplay = document.getElementById(timeDisplayId);
    const usernameInput = document.getElementById('username') as HTMLInputElement;

    if (!startButton || !timeDisplay || !usernameInput) {
        console.error('Could not find the start button or time display element.');
        return;
    }

    const timer = getGameTimer(timeDisplay);

    // Eventlyssnare på startknappen som startar spelet och triggar timern, ...
    startButton.addEventListener('click', () => {
        // Hämta användarnamnet från inputfältet eller använd standardnamn
        let username = usernameInput.value.trim(); 
    
        if (!username) {
            username = "Jazzonymous"; // Använd standardnamn om inget anges
            console.log('Inget användarnamn angavs. Använder standardnamn.');
        } else {
            console.log('Användarnamn angivet:', username);
        }
    
        // Spara användarnamnet i localStorage
        localStorage.setItem('username', username);
        console.log('Användarnamn sparades:', username);

        // Starta spelet
        //const myTimer = new Timer(timeDisplay);  // Skapa Timer-objektet
        //myTimer.start();  // Starta timern
        timer.start();  // Starta timern
        createGameQuestions(quizQuestions, sessionCount); // Skapa frågor
        getNextQuestion(sessionCount); // Startar counter funktion när spelet startar. 
        showGameSection(); // Gömmer intro och visar game section (frågorna)
        console.log('Spelet startas!');
    });
}

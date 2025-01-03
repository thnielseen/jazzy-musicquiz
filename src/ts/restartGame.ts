import { Timer } from './timerFunction';  // Importera timer-funktionen
import { getNextQuestion, sessionCount } from "./questionCounter";
import { quizQuestions, createGameQuestions } from "./getQuizQuestions";
import { switchHiddenGameAndResult } from './showAndHideSections';


export function initRestartGame(): void {
  const restartBtn = document.querySelector('.js-restart') as HTMLButtonElement;
  const timeDisplay = document.querySelector('.js-current-timer') as HTMLElement;

  restartBtn?.addEventListener('click', (e)=> {
    e.preventDefault;
    const myTimer = new Timer(timeDisplay);  // Skapa Timer-objektet
    myTimer.start();  // Starta timern

    console.log('SessionCount from RestartBtn:', sessionCount);

    switchHiddenGameAndResult();

    createGameQuestions(quizQuestions, sessionCount); // Skapa frågor
    getNextQuestion(sessionCount); // Startar counter funktion när spelet startar.
  });
}
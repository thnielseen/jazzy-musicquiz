//import { Timer } from './timerFunction';  // Importera timer-funktionen
import { getGameTimer } from './gameTimer';
import { getNextQuestion, sessionCount } from "./questionCounter";
import { createGameQuestions } from "./getQuizQuestions";
import { quizQuestions } from './quizData';
import { switchHiddenGameAndResult } from './showAndHideSections';


export function initRestartGame(): void {
  const restartBtn = document.querySelector('.js-restart') as HTMLButtonElement;
  const timeDisplay = document.querySelector('.js-current-timer') as HTMLElement;

  if (!timeDisplay) {
    console.error('Could not find time display element');
    return;
  } 

  const timer = getGameTimer(timeDisplay);

  restartBtn?.addEventListener('click', (e)=> {
    e.preventDefault;
    //const myTimer = new Timer(timeDisplay);  // Skapa Timer-objektet
    //myTimer.start();  // Starta timern
    timer.start();  // Starta timern

    console.log('SessionCount from RestartBtn:', sessionCount);

    switchHiddenGameAndResult();

    createGameQuestions(quizQuestions, sessionCount); // Skapa frågor
    getNextQuestion(sessionCount); // Startar counter funktion när spelet startar.
  });
}
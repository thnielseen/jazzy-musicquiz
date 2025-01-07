import { getGameTimer } from './gameTimer';
import { getNextQuestion, sessionCount } from "./questionCounter";
import { createGameQuestions, resetTotalScore } from "./getQuizQuestions";
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
    resetTotalScore();
    timer.start();
    switchHiddenGameAndResult();
    createGameQuestions(quizQuestions, sessionCount);
    getNextQuestion(sessionCount);
  });
}
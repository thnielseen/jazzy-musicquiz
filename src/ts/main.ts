import '../scss/style.scss'

//import { quizQuestions } from './getQuizQuestions'
import { setupStartButton } from './startButton';
// import { getNextQuestion } from './questionCounter';

import { userAnswerEvent } from './userAnswerEvent';
import { endGameButton } from './endGame';
import { initRestartGame } from './restartGame';

//console.log(quizQuestions)

window.addEventListener('DOMContentLoaded', () => {  
    // Koppla startknapp och display till setupStartButton
    setupStartButton('start-game-button', 'timeDisplay');
    // Restart Game
    initRestartGame();
    // Avsluta-knapp på resultatsidan.
    endGameButton();
});
  
// Temporary event listener for restart button (should be removed and added to restart button)
// When added to restart button, game section (questions) will show again
// const restart = document.querySelector('.js-restart');
// restart?.addEventListener('click', switchHiddenGameAndResult);

userAnswerEvent();
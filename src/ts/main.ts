import '../scss/style.scss'

//import { quizQuestions } from './getQuizQuestions'
import { setupStartButton } from './startButton';
// import { getNextQuestion } from './questionCounter';
import { switchHiddenGameAndResult, showStartSection } from './showAndHideSections';  // ??? Importera timer-funktionen
import { userAnswerEvent } from './userAnswerEvent';

//console.log(quizQuestions)

window.addEventListener('DOMContentLoaded', () => {  // ???
    // Koppla startknapp och display till setupStartButton
    setupStartButton('start-game-button', 'timeDisplay');
});
  
// Temporary event listener for restart button (should be removed and added to restart button)
// When added to restart button, game section (questions) will show again
const restart = document.querySelector('.js-restart');
restart?.addEventListener('click', switchHiddenGameAndResult);

// Temporary event listener for finish button (should be removed and added to finish button)
// When added to finish button, intro section will show again
const endGame = document.querySelector('.js-finish');
endGame?.addEventListener('click', showStartSection);

userAnswerEvent();

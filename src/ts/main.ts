import '../scss/style.scss'

//import { quizQuestions } from './getQuizQuestions'
import { setupStartButton } from './startButton';
import { getNextQuestion } from './questionCounter';

//console.log(quizQuestions)

window.addEventListener('DOMContentLoaded', () => {
    // Koppla startknapp och display till setupStartButton
    setupStartButton('start-game-button', 'timeDisplay');
});

//Temportary event listener for next question button and calling counterfunction for testing purposes (to be removed and added to start button)
document.querySelector('.js-next-question')?.addEventListener('click', () => {
    getNextQuestion();
    console.log('Next question button clicked');
  });
  
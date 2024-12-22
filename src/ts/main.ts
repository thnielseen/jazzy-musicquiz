import '../scss/style.scss'

import { quizQuestions } from './getQuizQuestions'
import { setupStartButton } from './startButton';

console.log(quizQuestions)


window.addEventListener('DOMContentLoaded', () => {
    // Koppla startknapp och display till setupStartButton
    setupStartButton('start-game-button', 'timeDisplay');
});
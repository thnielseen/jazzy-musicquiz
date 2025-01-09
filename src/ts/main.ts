import '../scss/style.scss'
import { setupStartButton } from './startButton';
import { userAnswerEvent } from './userAnswerEvent';
import { endGameButton } from './endGame';
import { initRestartGame } from './restartGame';

// Connect start button and time display to setupStartButton
setupStartButton('start-game-button', 'timeDisplay');
// Restart Game
initRestartGame();
// End game
endGameButton();

userAnswerEvent();
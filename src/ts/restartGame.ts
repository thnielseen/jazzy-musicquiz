import { getGameTimer } from './gameTimer';
import { getNextQuestion, sessionCount } from "./questionCounter";
import { createGameQuestions, resetTotalScore } from "./getQuizQuestions";
import { quizQuestions } from './quizData';
import { switchHiddenGameAndResult } from './showAndHideSections';

/**
 * Initializes the game restart functionality.
 * Sets up event handling for the restart button to reset game state 
 * and begin a new game session.
 * 
 * @returns {void}
 * @throws {Error} Logs error if timer display element is not found
 */
export function initRestartGame(): void {
  const restartBtn = document.querySelector('.js-restart') as HTMLButtonElement;
  const timeDisplay = document.querySelector('.js-current-timer') as HTMLElement;

  /**
   * Validate timer display exists before setup
   * Early return with error if missing
   */
  if (!timeDisplay) {
    console.error('Could not find time display element');
    return;
  } 

  const timer = getGameTimer(timeDisplay);

  /**
   * Handles game restart when button is clicked:
   * 1. Prevents default button behavior
   * 2. Resets the total score to zero
   * 3. Starts a new timer
   * 4. Switches view from results to game
   * 5. Creates and displays new questions
   * 
   * @param {Event} e - Click event object
   */
  restartBtn?.addEventListener('click', (e)=> {
    e.preventDefault;
    resetTotalScore();
    timer.start();
    switchHiddenGameAndResult();
    createGameQuestions(quizQuestions, sessionCount);
    getNextQuestion(sessionCount);
  });
}
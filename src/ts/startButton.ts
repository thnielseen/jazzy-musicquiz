import { getGameTimer } from './gameTimer';
import { getNextQuestion, sessionCount } from './questionCounter';
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

  // Event listener on the start button that starts the game and triggers the timer
  startButton.addEventListener('click', () => {
    // Retrieve the username from the input field or use a default name
    let username = usernameInput.value.trim();

    if (!username) {
      username = 'Jazzonymous'; // Standard name
    }

    // Save username in localStorage
    localStorage.setItem('username', username);

    // Start game
    timer.start();
    createGameQuestions(quizQuestions, sessionCount); // Create questions
    getNextQuestion(sessionCount); // Start counterer function when the game starts
    showGameSection(); // Hide intro and show game section
  });
}

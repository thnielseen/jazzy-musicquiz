import { QuizQuestion } from './getQuizQuestions';

/**
 * Converts a time value in seconds to a formatted string "X minuter och Y sekunder".
 * Calculates full minutes and remaining seconds, ensuring seconds are two digits.
 *
 * @param seconds - The total time in seconds.
 * @returns A formatted string representing the time.
 *
 * @example
 * formatTime(125); // "2 minuter och 5 sekunder"
 * formatTime(59);  // "0 minuter och 59 sekunder"
 */

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minuter och ${remainingSeconds} sekunder`;
}

/**
 * Calculates and displays the user's quiz results in the result container.
 * It computes the total number of correct answers, total time taken,
 * and total score, then updates the HTML content of the result container.
 *
 * @param questions - An array of quiz questions, including the user's answers, time taken, and scores.
 */

export function printResult(questions: QuizQuestion[]): void {
  const resultContainer = document.querySelector('.result__content');

  if (!resultContainer) {
    console.error('Result container not found!');
    return;
  }

  const correctAnswers: number = questions.filter(
    (q) => q.isUserAnswerCorrect,
  ).length;
  const totalScore: number = questions.reduce(
    (acc, q) => acc + (q.score || 0),
    0,
  );

  let savedTimes: number[] = [];
  try {
    savedTimes = JSON.parse(localStorage.getItem('timerHistory') || '[]');
  } catch (err) {
    console.error('Failed to parse timer history from localStorage', err);
  }

  resultContainer.innerHTML = `
  <h2 class="result__title" aria-live="polite" role="heading" aria-level="2">Resultat</h2>
  <div class="row" role="group" aria-labelledby="result-correct">
    <span id="result-correct" class="result__label">Antal rätt:</span>
    <span class="result__data js-result-count">${correctAnswers} av 10</span>
  </div>
  <div class="row" role="group" aria-labelledby="result-score">
    <span id="result-score" class="result__label">Antal poäng:</span>
    <span class="result__data js-result-score">${totalScore} p</span>
  </div>
  <div class="row" role="group" aria-labelledby="result-time">
    <span id="result-time" class="result__label">Din tid:</span>
    <span class="result__data">${formatTime(savedTimes.slice(-1)[0])}</span>
  </div>
`;
}

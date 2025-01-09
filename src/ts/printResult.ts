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
 * Prints the quiz results to the DOM, including correct answers count,
 * total score, and completion time.
 *
 * @param {QuizQuestion[]} questions - Array of quiz questions with user answers
 * @returns {void}
 * @throws {Error} Logs error if result container element is not found
 */
export function printResult(questions: QuizQuestion[]): void {
  const resultContainer = document.querySelector('.result__content');

  /** Validate result container exists before proceeding */
  if (!resultContainer) {
    console.error('Result container not found!');
    return;
  }

  /** Calculate final statistics */
  const correctAnswers: number = questions.filter(
    (q) => q.isUserAnswerCorrect,
  ).length;
  const totalScore: number = questions.reduce(
    (acc, q) => acc + (q.score || 0),
    0,
  );

  /**
   * Retrieve completion times from localStorage
   * Defaults to empty array if no history exists
   */

  let savedTimes: number[] = [];
  try {
    savedTimes = JSON.parse(localStorage.getItem('timerHistory') || '[]');
  } catch (err) {
    console.error('Failed to parse timer history from localStorage', err);
  }

  /**
   * Update DOM with formatted results:
   * - Number of correct answers (out of 10)
   * - Total score achieved
   * - Completion time for this attempt
   */
  resultContainer.innerHTML = `
  <h2 class="result__title" aria-live="polite">Resultat</h2>
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
import { QuizQuestion } from "./getQuizQuestions";


// Skulle kunna flyttas ut till en annan modul, typ utilities?
/**
 * Converts a time value in seconds to a formatted string "X minuter och Y sekunder".
 * Calculates full minutes and remaining seconds, ensuring seconds are two digits.
 * 
 * @param seconds - The total time in seconds.
 * @returns A formatted string representing the time.
 * 
 * @example
 * formatTime(125); // "2 minuter och 05 sekunder"
 * formatTime(59);  // "0 minuter och 59 sekunder"
 */

function formatTime (seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minuter och ${remainingSeconds.toString().padStart(2, '0')} sekunder.`;
}

/**
 * Calculates and displays the user's quiz results in the result container.
 * It computes the total number of correct answers, total time taken,
 * and total score, then updates the HTML content of the result container.
 * 
 * @param questions - An array of quiz questions, including the user's answers, time taken, and scores.
 */

export function printResult(questions: QuizQuestion[]): void { // Typen på questions sätts till QuizQuestion[]
    const resultContainer = document.querySelector(".result__content");

    if(!resultContainer) {
        console.error('Result container not found!');
        return;
    }

    const correctAnswers: number = questions.filter(q => q.isUserAnswerCorrect).length;
    const totalTime: number = Math.floor(
      questions.reduce((acc, q) => acc + (q.timeTaken ?? 0), 0)
    ); // Avrunda här för att säkerställa att totalTime är ett heltal    
    const totalScore: number = questions.reduce((acc, q) => acc + (q.score || 0), 0);


    console.log(correctAnswers, totalTime, totalScore);  // Debugging
    
    resultContainer.innerHTML = `
    <h2 class="result__title">Resultat</h2>
    <div class="row">
      <span class="result__label">Antal rätt:</span>
      <span class="result__data js-result-count">${correctAnswers} av 10</span>
    </div>
    <div class="row">
      <span class="result__label">Antal poäng:</span>
      <span class="result__data js-result-score">${totalScore} p</span>
    </div>
    <div class="row">
      <span class="result__label">Din tid:</span>
      <span class="result__data">${formatTime(totalTime)}</span>
    </div>
    <div class="row">
      <details>
        <summary>Highscore</summary>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          ducimus.
        </div>
      </details>
    </div>
    `

}

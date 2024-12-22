import { QuizQuestion } from './getQuizQuestions';

/**
 * Renders a question and its answers in the DOM.
 * 
 * This function takes a `QuizQuestion` object and the index of the current question.
 * It updates the question number displayed in the interface and dynamically generates
 * the HTML structure for the question and its answer options.
 * 
 * If the required DOM elements (`.js-game-content` and `.js-game-question-number`) are not found,
 * it logs an error to the console.
 * 
 * @param {QuizQuestion} question - The question object to render, containing the question text and answers.
 * @param {number} questionIndex - The index of the current question, used for display and tracking.
 */
export function printQuestion(question: QuizQuestion, questionIndex: number): void {
  const gameContent = document.querySelector('.js-question-card');
  const questionNumberElement = document.querySelector('.js-game-question-number');

  if (gameContent && questionNumberElement) {
      // Update the displayed question number
      questionNumberElement.textContent = `${questionIndex + 1}`;

      // Render the question and answer options
      gameContent.innerHTML = `
        <h3 class="game__question-title">Vilken sångtext saknas?</h3>
        <h4 class="game__question" data-qid="${questionIndex}">${question.question}</h4>
        <ul class="game__buttons">
          ${question.answers
            .map(
              (answer, answerIndex) => `
            <li class="game__answer-button">
              <input type="radio" name="answer" id="answer${answerIndex}" value="${answer.answer}">
              <label for="answer${answerIndex}">${answer.answer}</label>
              <span class="game__answer-icon"></span>
            </li>
          `
            )
            .join('')}
        </ul>
    `;
  } else {
      if (!gameContent) {
          console.error("Game content container not found.");
      }
      if (!questionNumberElement) {
          console.error("Question number element not found.");
      }
  }
}


import { QuizQuestion } from './getQuizQuestions';
import { questionCount } from './questionCounter';


// Variables to store the current question and the time it was displayed
export let questionStartTime: number;
export let currentQuestion: QuizQuestion;

/**
 * Renders a question and its answers in the DOM.
 * 
 * This function takes a `QuizQuestion` object and the index of the current question.
 * It updates the question number displayed in the interface and dynamically generates
 * the HTML structure for the question and its answer options.
 * 
 * @param {QuizQuestion} question - The question object to render, containing the question text and answers.
 * @param {number} questionIndex - The index of the current question, used for display and tracking.
 */
export function printQuestion(question: QuizQuestion, questionIndex: number): void {

  const gameContent = document.querySelector('.js-question-card');
  const questionNumberElement = document.querySelector('.js-game-question-number');

  if (gameContent && questionNumberElement) {
      // Update the displayed question number
      questionNumberElement.textContent = (questionCount + 1).toString(); 

      // Render the question and answer options
      gameContent.innerHTML = `
        <h3 class="game__question-title">Vilken sångtext saknas?</h3>
        <h4 class="game__question" data-qid="${questionIndex}">${question.question}</h4>
        <ul class="game__buttons">
          ${question.answers
            .map(
              (answer, answerIndex) => `
            <li class="game__answer-button js-answer-btn">
              <label for="answer${answerIndex}">${answer.answer}</label>
              <input type="radio" name="answer" id="answer${answerIndex}" value="${answer.answer}">
              <span class="game__answer-icon js-answer-icon"></span>
            </li>
          `
            )
            .join('')}
        </ul>
    `;

    // Store the current question and the time it was displayed
    currentQuestion = question;
    questionStartTime = Date.now();
  } else {
      if (!gameContent) {
          console.error("Game content container not found.");
      }
      if (!questionNumberElement) {
          console.error("Question number element not found.");
      }
  }
}


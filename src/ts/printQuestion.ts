import { QuizQuestion } from './getQuizQuestions';
import { questionCount } from './questionCounter';

// Variables to store the current question and the time it was displayed
export let questionStartTime: number;
export let currentQuestion: QuizQuestion;

/**
 * Renders a quiz question and its answer options to the game interface.
 * Also tracks question timing and updates question counter display.
 * 
 * @param {QuizQuestion} question - The quiz question object to display
 * @param {number} questionIndex - Index of the current question
 * @returns {void}
 * @throws {Error} Logs error if required DOM elements are not found
 * 
 * @example
 * printQuestion(quizQuestion, 0);
 */
export function printQuestion(question: QuizQuestion, questionIndex: number): void {
  /** Get required DOM elements */

  const gameContent = document.querySelector('.js-question-card');
  const questionNumberElement = document.querySelector('.js-game-question-number');
  const questionFeedbackNumber = document.querySelector('.js-question-feedback-number');


  
  if (gameContent && questionNumberElement) {
    /** Update question counter display (1-based) */
      questionNumberElement.textContent = (questionCount + 1).toString(); 
    

    if (gameContent && questionFeedbackNumber) {
      /** Update question counter display aria feedback (1-based) */
    questionFeedbackNumber.textContent = (questionCount + 1).toString();
    }
    
      /**
       * Render question interface with:
       * - Question title
       * - Missing lyrics text
       * - Radio button list of possible answers
       * - Answer status icons (initially empty)
       */
        gameContent.innerHTML = `
        <h3 class='game__question-title'>Vilken sångtext saknas?</h3>
        <h4 class='game__question' data-qid='${questionIndex}' aria-live='polite'>${question.question}</h4>
        <fieldset class='game__buttons'>

          ${question.answers
            .map(
              (answer, answerIndex) => `
            <div class='game__answer-button js-answer-btn'>
              <label for='answer${answerIndex}'>${answer.answer}</label>
              <input type='radio' name='answer' id='answer${answerIndex}' value='${answer.answer}'>
              <span class='game__answer-icon js-answer-icon'></span>
            </div>
          `,
            )
            .join('')}
        </fieldset>
    `;

    /**
     * Update game state:
     * - Store current question for answer checking
     * - Record start time for scoring
     */
    currentQuestion = question;
    questionStartTime = Date.now();
  } else {

    /** Log specific errors for missing elements */
    if (!gameContent) {
        console.error("Game content container not found.");
    }
    if (!questionNumberElement) {
        console.error("Question number element not found.");
    }
  }
}



import { questionStartTime, currentQuestion } from "./printQuestion";
import { getNextQuestion, sessionCount, questionCount } from "./questionCounter";
import { getGameTimer } from "./gameTimer";
import { updateTotalScore } from "./getQuizQuestions";

/**
 * Event listener for user answers.
 * Selects the game content element and listens for click events on radio buttons.
 * When a radio button is clicked:
 * - The user's answer is stored.
 * - The time taken to answer the question is calculated and stored in the question object.
 * - The user's answer is checked against the correct answer and stored in the question object.
 * - The user's score is updated based on the correctness of the answer and the time taken to answer and stored in the question object.
 * - The next question is retrieved after a short delay of 2 seconds.
 */

export function userAnswerEvent(): void {
  const timeDisplay = document.querySelector('.js-current-timer') as HTMLElement;
  const timer = getGameTimer(timeDisplay);
  
  // Get submit answer button
  const submitAnswerBtn = document.querySelector('.js-next-question') as HTMLButtonElement;

  // Dynamic countdown attributes
  let isCountDownActive: boolean = false;
  let currentCountDown: number = 3;
  
  function submitAnswer(e: Event) { // add : void ?
    e.preventDefault;

    // Get the elements
    const checkedAnswer = document.querySelector('input[name="answer"]:checked') as HTMLInputElement;

    if (!checkedAnswer) {
      alert('Var vänlig markera ett svar innan du klickar på knappen "Skicka svar"');
      console.error('No current question is set.');
      return;
    }
    
    if (checkedAnswer) {
      const answerBtn = checkedAnswer.closest('.js-answer-btn') as HTMLElement;
      const answerIcon = answerBtn?.querySelector('.js-answer-icon') as HTMLInputElement;
      const feedbackMessage = document.querySelector('.js-feedback-result') as HTMLElement;

      // Store the value of the selected answer
      const userAnswer: string = checkedAnswer.value;

      if (currentQuestion) {
        // Store the user's answer, check if it is correct, and update the score in the current question object
        currentQuestion.checkUserAnswer(userAnswer);

        // Show for user if correct or incorrect
        if (currentQuestion.isUserAnswerCorrect) {
          answerBtn?.classList.add('valid');
          answerIcon.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#party-icon"/></svg>';
          if (feedbackMessage) {
            feedbackMessage.textContent = "Rätt svar! Bra jobbat!";
          }
        } else {
          answerBtn?.classList.add('invalid');
          answerIcon.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#sad-icon"/></svg>';
          if (feedbackMessage) {
            feedbackMessage.textContent = `Tyvärr, det blev fel`;
          }
        }
        
        startCountDown(answerBtn, answerIcon);
      } 
    }
  }

  function updateCountDownDisplay(count: number): void {
    submitAnswerBtn.innerText = `Nästa fråga visas om ... ${count}`;
  }

  function finishCountDown(answerBtn:HTMLElement, answerIcon:HTMLElement): void {
    
    const gameContent = document.querySelector(".js-game-content",) as HTMLElement;
    // Calculate the time taken to answer the question
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    currentQuestion.timeTaken = timeTaken;
    currentQuestion.score = currentQuestion.calculateScore();
    updateTotalScore(currentQuestion.score);

    if (questionCount === 10) {
      timer.stop();
    }
    // When new question redirect focus to 
    if (gameContent) {
      gameContent.focus();
    }
  
    
    submitAnswerBtn.innerText = 'Bekräfta svar';
    document.body.style.removeProperty('pointer-events');
    document.body.style.removeProperty('cursor');

    answerBtn?.classList.remove('valid');
    answerBtn?.classList.remove('invalid');
    answerIcon.innerHTML = '';
    isCountDownActive = false;
    getNextQuestion(sessionCount);
  }

  function runCountDown(answerBtn:HTMLElement, answerIcon:HTMLElement): void {
    const intervalId = setInterval(() => {
      currentCountDown--;
      
      if (currentCountDown > 0) {
          updateCountDownDisplay(currentCountDown);
      } else {
          finishCountDown(answerBtn, answerIcon);
          clearInterval(intervalId);
      }
    }, 1000);
  }

  function startCountDown(answerBtn:HTMLElement, answerIcon:HTMLElement): void {
    // Prevent multiple countdowns
    if (isCountDownActive) return;

    // Set up Initial State
    isCountDownActive = true;
    currentCountDown = 2;

    document.body.style.pointerEvents = 'none';
    document.body.style.cursor = 'wait';

    // Start displaying the countdown
    updateCountDownDisplay(currentCountDown);
    runCountDown(answerBtn, answerIcon);
  }

  // Event listener for submit answer button
  submitAnswerBtn?.addEventListener('click', submitAnswer);
}

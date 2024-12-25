import { questionStartTime, currentQuestion } from "./printQuestion";
import { getNextQuestion } from "./questionCounter";

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
  const gameContent = document.querySelector('.js-question-card');

  if (gameContent) {
    // Event delegation to listen for clicks on radio buttons in the game content element 
    gameContent.addEventListener('click', function(event) {
      const target = event.target as HTMLElement;

      // Check if the clicked element is a radio button input and get the value of the selected answer
      if (target && target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'radio') {
        // Get the value of the selected answer
        const radioButton = target as HTMLInputElement;
        //Store the value of the selected answer
        const userAnswer = radioButton.value;

        // Calculate the time taken to answer the question
        const timeTaken = (Date.now() - questionStartTime) / 1000; 

        // Check if there is a current question object
        if (currentQuestion) {
          // Store the user's answer, check if it is correct, and update the score in the current question object
          currentQuestion.timeTaken = timeTaken;
          currentQuestion.checkUserAnswer(userAnswer);

          // Log the updated question properties to the console for testing
          console.log('User answer:', userAnswer, 'Is user answer correct:', currentQuestion.isUserAnswerCorrect, 'Time taken:', timeTaken,  'Score:', currentQuestion.score);

          // Get the next question after a short delay          
          setTimeout(() => {
            getNextQuestion();
          }, 2000);
        } else {
          // Log an error if there is no current question object
          console.error('Ingen aktuell fråga är inställd.');
        }
      }
    });
  } else {
    // Log an error if the parent element for the game content
    console.error('Föräldraelementet för spelinnehåll hittades inte.');
  }
}

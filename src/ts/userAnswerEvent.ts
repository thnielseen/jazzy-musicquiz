import { questionStartTime, currentQuestion } from "./printQuestion";
import { getNextQuestion } from "./questionCounter";

export function userAnswerEvent(): void {
  const gameContent = document.querySelector('.js-question-card');

  if (gameContent) {
    gameContent.addEventListener('click', function(event) {
      const target = event.target as HTMLElement;


      if (target && target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'radio') {
        const radioButton = target as HTMLInputElement;
        const userAnswer = radioButton.value;

        const timeTaken = (Date.now() - questionStartTime) / 1000; 

        if (currentQuestion) {

          currentQuestion.timeTaken = timeTaken;


          currentQuestion.checkUserAnswer(userAnswer);


          console.log(`Valt svar: ${userAnswer}`);
          console.log(`Tid tagen: ${timeTaken} sekunder`);
          console.log(`Är svaret korrekt: ${currentQuestion.isUserAnswerCorrect}`);
          console.log(`Tilldelad poäng: ${currentQuestion.score}`);

          setTimeout(() => {
            getNextQuestion();
          }, 2000);
        } else {
          console.error('Ingen aktuell fråga är inställd.');
        }
      }
    });
  } else {
    console.error('Föräldraelementet för spelinnehåll hittades inte.');
  }
}

import { getGameTimer } from "./gameTimer";
import { QuizQuestion, quizQuestions } from "./getQuizQuestions";
import { printQuestion } from "./printQuestion";
import { printResult } from "./printResult";
import { switchHiddenGameAndResult } from './showAndHideSections';


/**
 * Retrieves the next question from the quiz and increases the question count.
 * 
 * This function checks if there are more questions to ask (up to 10). 
 * If so, it retrieves the next question, displays it, and increments the counter. 
 * If all questions have been asked, it calls the printResult() function to display the quiz results.
 * 
 * @returns {QuizQuestion | null} The next question if available, or null if the quiz is over.
 */


// Counter for amount of questions shown
export let questionCount: number = 0;
export let currentIndex: number = 0;
export let sessionCount: number = 0;

export function getNextQuestion(currentSession: number): QuizQuestion | null {

    const timeDisplay = document.querySelector('.js-current-timer') as HTMLElement;
    const timer = getGameTimer(timeDisplay);

    const numQuestionsLeft: number = (currentSession * -10) + quizQuestions.length;

    if (numQuestionsLeft < 10) {
        currentSession = sessionCount = 0;
    }

    console.log('getNextQuestion(): currentSession', currentSession);

    currentIndex = (currentSession * 10) + questionCount;

    if (questionCount < 10) {
        const nextQuestion = quizQuestions[currentIndex]; // Get question based on index in quizQuestions array
        printQuestion(nextQuestion, currentIndex); // Name of Therese's print question function
        questionCount++; // Increase counter
        return nextQuestion;
    } else {
        // What happens when quiz is over
        console.log('Quiz is finished!');
        timer.stop();
        sessionCount++;
        questionCount = 0;
        printResult(quizQuestions);
        switchHiddenGameAndResult(); // Alternerar mellan att gömma/visa game eller result-section
        return null;
    }
}
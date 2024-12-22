import { QuizQuestion, quizQuestions } from "./getQuizQuestions";
import { printQuestion } from "./printQuestion";

/**
 * Retrieves the next question from the quiz and increases the question count.
 * 
 * This function checks if there are more questions to ask (up to 10). 
 * If so, it retrieves the next question, displays it, and increments the counter. 
 * If all questions have been asked, it calls the function(s) that deals with the quiz being finished. (To-do)
 * 
 * @returns {QuizQuestion | null} The next question if available, or null if the quiz is over.
 */

// Counter for amount of questions shown
let questionCount = 0; 

export function getNextQuestion(): QuizQuestion | null {
    if (questionCount < 10) {
        const nextQuestion = quizQuestions[questionCount]; // Get question based on index in quizQuestions array
        printQuestion(nextQuestion, questionCount); // Name of Therese's print question function
        questionCount++; // Increase counter
        return nextQuestion;
    } else {
        // What happens when quiz is over
        // showResult() // Future function 
        console.log('Quiz is finished!');
        return null;
    }
}


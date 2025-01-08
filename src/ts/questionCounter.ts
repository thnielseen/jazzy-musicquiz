import { QuizQuestion } from "./getQuizQuestions";
import { quizQuestions } from "./quizData";
import { printQuestion } from "./printQuestion";
import { printResult } from "./printResult";
import { switchHiddenGameAndResult } from './showAndHideSections';


/**
 * Retrieves the next question from the quiz and updates counters accordingly.
 *
 * This function determines the current question index based on the session and question count.
 * It retrieves and displays the next question if fewer than 10 questions have been shown in the current session.
 * If all questions in the session have been asked (all questions from the whole array), it resets the session counters, displays the results,
 * and resets scores for all questions.
 *
 * @param {number} currentSession - The current session index (used to calculate the current question range).
 * @returns {QuizQuestion | null} The next question if available, or `null` if the quiz is over.
 */


/** Current count of questions answered in the session */
export let questionCount: number = 0;

/** Current index in the quizQuestions array */
export let currentIndex: number = 0;

/** Number of completed game sessions */
export let sessionCount: number = 0;

/**
 * Gets the next question in the quiz sequence and handles game progression.
 * Manages question cycling, session counting, and game completion.
 * 
 * @param {number} currentSession - Current game session number
 * @returns {QuizQuestion | null} Next question object or null if quiz is complete
 */
export function getNextQuestion(currentSession: number): QuizQuestion | null {
    // Calculate remaining questions in the question pool
    const numQuestionsLeft: number = (currentSession * -10) + quizQuestions.length;

    /** Reset session if not enough questions remain */
    if (numQuestionsLeft < 10) {
        currentSession = sessionCount = 0;
    }

    // Calculate current question index based on session and question count
    currentIndex = (currentSession * 10) + questionCount;

    if (questionCount < 10) {
        /** Get and display next question */
        const nextQuestion = quizQuestions[currentIndex]; // Get question based on index in quizQuestions array
        printQuestion(nextQuestion, currentIndex);
        questionCount++;
        return nextQuestion;
    } else {
        /** Handle quiz completion:
         * 1. Increment session counter
         * 2. Reset question counter
         * 3. Display results
         * 4. Switch to result view
         * 5. Reset all question scores
         */
        sessionCount++;
        questionCount = 0;
        printResult(quizQuestions);
        switchHiddenGameAndResult();
        // Reset scores
        quizQuestions.forEach(question => {
            question.score = 0;
        });
        return null;
    }
}
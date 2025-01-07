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

// Counter for amount of questions shown
export let questionCount: number = 0;
export let currentIndex: number = 0;
export let sessionCount: number = 0;

export function getNextQuestion(currentSession: number): QuizQuestion | null {

    const numQuestionsLeft: number = (currentSession * -10) + quizQuestions.length;

    if (numQuestionsLeft < 10) {
        currentSession = sessionCount = 0;
    }

    currentIndex = (currentSession * 10) + questionCount;

    if (questionCount < 10) {
        const nextQuestion = quizQuestions[currentIndex]; // Get question based on index in quizQuestions array
        printQuestion(nextQuestion, currentIndex);
        questionCount++;
        return nextQuestion;
    } else {
        // What happens when quiz is over
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
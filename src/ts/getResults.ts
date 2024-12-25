import { Timer } from './timerFunction';
import { calculateScore, checkUserAnswer } from './getQuizQuestions';  // Exempel på hur du importerar logik för att räkna poäng och kontrollera svar.

export function collectGameData(quizQuestions: QuizQuestion[]): { correctAnswers: number, totalScore: number, totalTime: number } {
    const correctAnswers = quizQuestions.filter(q => q.isUserAnswerCorrect).length;
    const totalScore = quizQuestions.reduce((acc, q) => acc + q.score, 0);
    const totalTime = Timer.getLastSavedTime() || 0; // Hämta senaste sparade tid

    console.log("Samlad data:", { correctAnswers, totalScore, totalTime });

    return { correctAnswers, totalScore, totalTime };
}
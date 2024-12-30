//** 
// x Skapa en funktion som visar en spelares resultat 
// x Printa HTML-strukturen och innehållet 
// - Koppla till counter-funktionen
// */

import { QuizQuestion, quizQuestions } from "./getQuizQuestions";

/**
 * Calculates and displays the user's quiz results in the result container.
 * It computes the total number of correct answers, total time taken,
 * and total score, then updates the HTML content of the result container.
 * 
 * @param quizQuestions - An array of quiz questions, including the user's answers, time taken, and scores.
 */


export function printResult(quizQuestions: QuizQuestion[]): void { // Typen på quizQuestions sätts till QuizQuestion[]
    const resultContainer = document.querySelector(".result__content");

    if(!resultContainer) {
        console.error('Result container not found!');
        return;
    }

    const correctAnswers = quizQuestions.filter(q => q.isUserAnswerCorrect).length;
    const totalTime = quizQuestions.reduce((acc, q) => acc + (q.timeTaken || 0), 0);
    const totalScore = quizQuestions.reduce((acc, q) => acc + q.score, 0);

    console.log(correctAnswers, totalTime, totalScore);  // Debugging
    
    resultContainer.innerHTML = `
    <h2 class="result__title">Resultat</h2>
          <div class="row">
            <span class="result__label">Antal rätt: ${correctAnswers} av 10</span>
            <span class="result__data js-result-count">9</span>
          </div>
          <div class="row">
            <span class="result__label">Antal poäng:</span>
            <span class="result__data js-result-score">${totalScore}</span>
          </div>
          <div class="row">
            <span class="result__label">Din tid:</span>
            <span class="result__data">
              ${totalTime}
              <span class="js-result-minutes">3</span> minuter
              <span class="js-result-seconds">35</span> sekunder
            </span>
    `

}

// Flytta till rätt ställe att kalla på den här funktionen
printResult(quizQuestions);
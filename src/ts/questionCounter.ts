// Create a function that counts how many question cards has been shown
// As long as they are less than 10 cards, show a new card after answer
// If > 10 left continue using array, else reshuffle

import { QuizQuestion, quizQuestions } from "./getQuizQuestions";

// Counter for amount of questions shown
let questionCount = 0; 

/**
 * Gets the next question card and increases the counter
 */
function getNextQuestion(): QuizQuestion | null {
    if (questionCount < 10) {
        const nextQuestion = quizQuestions[questionCount]; // Get question based on index in quizQuestions array
        // displayQuestion(nextQuestion); // Function that deals with showing the question (created by Therese so name should get updated)
        questionCount++; // Increase counter
        return nextQuestion;
    } else {
        // What happens when quiz is over
        console.log('Quiz is finished!');
        return null;
    }
}

getNextQuestion();

// Simulated function that deals with printing the question (will be made by Therese)
// function displayQuestion(question: QuizQuestion) {
//     console.log(`Fråga: ${question.question}`);
//     question.answers.forEach((answer, index) => {
//       console.log(`${index + 1}: ${answer.answer}`);
//     });
//   }

//   let currentQuestion = getNextQuestion();
//   while (currentQuestion) {
//     displayQuestion(currentQuestion);
//     currentQuestion = getNextQuestion();
//   }
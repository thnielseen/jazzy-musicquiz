import { shuffleArray } from "./utilities";


// Interface representing an answer object
export interface IAnswer {
  answer: string;       // The text of the answer
  isCorrect: boolean;   // Indicates if the answer is correct
}


// Interface representing a QuizQuestion object
export interface IQuizQuestion {
  question: string;             // The text of the question
  answers: IAnswer[];           // An array of possible answers
  correctAnswer: string;        // The correct answer as a string
  userAnswer: string | null;    // The user's selected answer (null if unanswered)
  timeTaken: number | null;     // The time taken by the user to answer (in seconds)
  isUserAnswerCorrect: boolean | null; // Indicates if the user's answer is correct
}


// Class representing an answer
export class Answer implements IAnswer {
  answer: string;    // The text of the answer
  isCorrect: boolean; // Indicates if the answer is correct

  constructor(answer: string) {
    this.answer = answer;
    this.isCorrect = false; // Default value; will be updated later if it's correct
  }
}


// Class representing a QuizQuestion
export class QuizQuestion implements IQuizQuestion {
  question: string;                // The text of the question
  answers: Answer[];               // An array of Answer objects
  correctAnswer: string;           // The correct answer as a string
  userAnswer: string | null;       // The user's selected answer (null if unanswered)
  timeTaken: number;               // The time taken by the user to answer (in seconds)
  isUserAnswerCorrect: boolean | null; // Indicates if the user's answer is correct
  score: number;                   // The score awarded for the question

  /**
   * Constructor for the QuizQuestion class.
   * @param question - The text of the question.
   * @param answers - An array of possible answers as strings.
   * @param correctAnswer - The correct answer as a string.
   * 
   * The constructor initializes the QuizQuestion properties and converts the 
   * answers array into Answer objects. It also determines which answer is correct.
   */

  constructor(question: string, answers: string[], correctAnswer: string) {
    this.question = question;
    this.answers = answers.map((answer) => new Answer(answer)); // Convert strings to Answer objects
    this.correctAnswer = correctAnswer;
    this.userAnswer = null;
    this.timeTaken = 0; // Default value until set during gameplay
    this.isUserAnswerCorrect = null;
    this.score = 0; // Initial score is 0

    this.calculateCorrectAnswer(); // Determine which answer is correct
  }

  /**
   * Determines the correct answer for the question.
   * This method updates the `isCorrect` property of each Answer object
   * based on whether it matches the `correctAnswer`.
   */

  calculateCorrectAnswer(): void {
    this.answers.forEach((answer) => {
      answer.isCorrect = answer.answer === this.correctAnswer;
    });
  }

  /**
   * Calculates the score for the QuizQuestion based on the user's performance.
   * 
   * Scoring rules:
   * - 0 points if the user's answer is incorrect.
   * - 1 point if the time taken exceeds 60 seconds.
   * - 10 points if the user answers correctly within 10 seconds.
   * - For times between 10 and 60 seconds, the score decreases linearly from 10 to 1.
   * 
   * @returns {number} The calculated score.
   */

  calculateScore(): number {
    if (!this.isUserAnswerCorrect) {
      return 0; // Incorrect answer
    }
    if (!this.timeTaken || this.timeTaken > 60) {
      return 1; // More than 60 seconds
    }
    if (this.timeTaken <= 10) {
      return 10; // Maximum score for quick answers
    }
    // Gradual score reduction for times between 10 and 60 seconds
    return Math.max(1, 10 - Math.floor((this.timeTaken - 10) / 5));
  }

  /**
   * Checks the user's answer for correctness and calculates the score.
   * @param userAnswer - The user's selected answer as a string.
   * 
   * This method sets the user's answer, evaluates if it's correct, and calculates
   * the score based on the answer and time taken.
   */

  checkUserAnswer(userAnswer: string): void {
    this.userAnswer = userAnswer; // Record the user's answer
    this.isUserAnswerCorrect = userAnswer === this.correctAnswer; // Check correctness
    this.score = this.calculateScore(); // Calculate the score
  }
}


/**
 * Shuffles the order of the provided quiz questions
 * and also shuffles the order of the answers for each question.
 *
 * @param {QuizQuestion[]} quizQuestions - The array of QuizQuestion objects to shuffle.
 * @returns {QuizQuestion[]} - The shuffled array of QuizQuestions with shuffled answers.
 */

export const createGameQuestions = (quizQuestions: QuizQuestion[], sessionCount: number = 0): QuizQuestion[] => {
  
  const numQuestionsLeft: number = (sessionCount * -10) + quizQuestions.length;
  console.log('numQuestionsLeft',numQuestionsLeft);

  if (sessionCount < 1 || numQuestionsLeft < 10) {
    console.log('Shuffle')
    // Shuffle the quiz questions array
    shuffleArray(quizQuestions).forEach((quizQuestion) => {
      // Shuffle the answers within each question
      quizQuestion.answers = shuffleArray(quizQuestion.answers);
    });
  }

  // Reset time taken
  quizQuestions.forEach(question => {
    question.timeTaken = 0;
  });
  
  // Return the array of questions
  return quizQuestions;
};

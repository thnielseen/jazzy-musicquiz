import { shuffleArray } from "./utilities";


/** Interface for quiz answer data */
export interface IAnswer {
  answer: string;       // The text of the answer
  isCorrect: boolean;   // Indicates if the answer is correct
}


/** Interface for quiz question data */
export interface IQuizQuestion {
  question: string;             // The text of the question
  answers: IAnswer[];           // An array of possible answers
  correctAnswer: string;        // The correct answer as a string
  userAnswer: string | null;    // The user's selected answer (null if unanswered)
  timeTaken: number | null;     // The time taken by the user to answer (in seconds)
  isUserAnswerCorrect: boolean | null; // Indicates if the user's answer is correct
}


/**
 * Represents a single answer choice in a quiz question.
 * Implements the IAnswer interface.
 */
export class Answer implements IAnswer {
  answer: string;    // The text of the answer
  isCorrect: boolean; // Indicates if the answer is correct

  /**
   * Creates a new answer object.
   * @param {string} answer - Text of the answer choice
   */
  constructor(answer: string) {
    this.answer = answer;
    this.isCorrect = false; // Default to incorrect until set
  }
}

// Global variable for the total score
let totalScore: number = 0;

/**
 * Updates the total score and displays it.
 * @param {number} points - Points to add to total score 
 * @returns {void}
 * @throws {Error} Logs error if score element not found
 */
export function updateTotalScore(points: number): void {
  // Add the score to the total score
  totalScore += points;

  // Update the HTML element
  const scoreElement = document.querySelector('.js-current-score');
  if (scoreElement) {
    scoreElement.textContent = totalScore.toString();
  } else {
    console.error("Element for points could not be found.");
  }
}

/**
 * Resets the total score to zero and updates display.
 * @returns {void}
 */
export function resetTotalScore(): void {
  const scoreElement = document.querySelector('.js-current-score') as HTMLElement;
  scoreElement.textContent = '0';
  totalScore = 0;
}


/**
 * Represents a quiz question with answer choices and scoring logic.
 * Implements the IQuizQuestion interface.
 */
export class QuizQuestion implements IQuizQuestion {
  question: string;                // The text of the question
  answers: Answer[];               // An array of Answer objects
  correctAnswer: string;           // The correct answer as a string
  userAnswer: string | null;       // The user's selected answer (null if unanswered)
  timeTaken: number;               // The time taken by the user to answer (in seconds)
  isUserAnswerCorrect: boolean | null; // Indicates if the user's answer is correct
  score: number;                   // The score awarded for the question

  /**
   * Creates a new quiz question.
   * @param {string} question - Question text with [_______] placeholder
   * @param {string[]} answers - Array of possible answer strings 
   * @param {string} correctAnswer - The correct answer string
   */
  constructor(question: string, answers: string[], correctAnswer: string) {
    this.question = question;
    this.answers = answers.map((answer) => new Answer(answer)); // Convert strings to Answer objects
    this.correctAnswer = correctAnswer;
    this.userAnswer = null;
    this.timeTaken = 0; // Default value until set during gameplay
    this.isUserAnswerCorrect = null;
    this.score = 0; // Initial score is 0

    this.toggleCorrectAnswer(); // Determine which answer is correct
  }

  /**
   * Marks which answer is correct in the answers array.
   * @returns {void}
   */
  toggleCorrectAnswer(): void {
    this.answers.forEach((answer) => {
      answer.isCorrect = answer.answer === this.correctAnswer;
    });
  }

  /**
   * Calculates score based on correctness and time taken.
   * - 10 points: Correct answer within 10 seconds
   * - 1-9 points: Correct answer between 10-60 seconds (decreases with time)
   * - 1 point: Correct answer after 60 seconds
   * - 0 points: Incorrect answer
   * 
   * @returns {number} Calculated score for the question
   */
  calculateScore(): number {

    if (this.timeTaken === 0 || !this.isUserAnswerCorrect) {
      return 0; // Incorrect answer
    }
    if (this.timeTaken > 30) {
      return 1; // More than 60 seconds
    }
    if (this.timeTaken <= 5) {
      return 10; // Maximum score for quick answers
    }
    // Gradual score reduction for times between 10 and 60 seconds
    return Math.max(1, 5  - Math.floor((this.timeTaken - 5) / 5));
  }

  /**
   * Records and validates user's answer.
   * @param {string} userAnswer - The user's selected answer
   * @returns {void}
   */
  checkUserAnswer(userAnswer: string): void {
    this.userAnswer = userAnswer; // Record the user's answer
    this.isUserAnswerCorrect = userAnswer === this.correctAnswer; // Check correctness
  }
}


/**
 * Creates a new quiz session by shuffling questions and answers.
 * @param {QuizQuestion[]} quizQuestions - Array of quiz questions to shuffle
 * @param {number} sessionCount - Current session number (defaults to 0)
 * @returns {QuizQuestion[]} Shuffled array of quiz questions
 */
export const createGameQuestions = (quizQuestions: QuizQuestion[], sessionCount: number = 0): QuizQuestion[] => {
  
  const numQuestionsLeft: number = (sessionCount * -10) + quizQuestions.length;
  if (sessionCount < 1 || numQuestionsLeft < 10) {
    // Shuffle the quiz questions array
    shuffleArray(quizQuestions).forEach((quizQuestion) => {
      // Shuffle the answers within each question
      quizQuestion.answers = shuffleArray(quizQuestion.answers);
    });

    // Reset time taken
    quizQuestions.forEach(question => {
      question.timeTaken = 0;
    });
  }
  
  // Return the array of questions
  return quizQuestions;
};

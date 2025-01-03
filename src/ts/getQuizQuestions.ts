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
export const quizQuestions: QuizQuestion[] = [
  new QuizQuestion(
    "Trying to keep up with you, And I don't know if I can do it, Oh no ....",
    [
      "You had too much",
      "I've said too much",
      "I've had enough",
      "I'm losing touch"
    ],
    "I've said too much"
    
  ),
  new QuizQuestion(
    "Another turning point, a fork stuck in the road\nTime grabs you by the wrist, ..... ",
    [
      "Directs you down the road",
      "Asks you where to go",
      "Directs you where to go",
      "Lead you where to go"
    ],
    "Directs you where to go"
  ),
  new QuizQuestion(
    "I'm wastin' my time, I got nothin' to do\nI'm hangin' around, ....",
    [
      "I'm waitin' for you",
      "I'm dreamin' of you",
      "I'm thinkin' of you",
      "I'm talkin' to you"
    ],
    "I'm waitin' for you"
  ),
  new QuizQuestion(
    "I'll be your dream, I'll be your wish, I'll be your fantasy\nI'll be your hope, I'll be your love, ....",
    [
      "Be the guidance you'd seek",
      "Be everything that you need",
      "Lay by your side when you sleep",
      "Be everything you could need"
    ],
    "Be everything that you need"
  ),
  new QuizQuestion(
    "You want what you can't have, ooh girl, that's too damn bad. Don't touch what you can't grab ....",
    [
      "End up with two backhands.",
      "You’ll land where you can’t stand.",
      "You’ll fall right where you stand.",
      "You chase what you can’t catch."
    ],
    "End up with two backhands."
  ),
  new QuizQuestion(
    "When I see your face\nThere's not a ....\n'Cause you're amazing\nJust the way you are",
    [
      "thing that I could change",
      "thing to replace",
      "thing I could say",
      "thing I could erase"
    ],
    "thing that I would change"
  ),
  new QuizQuestion(
    "You think I'm pretty without any makeup on\nYou think I'm funny when I tell ....",
    [
      "the joke too long",
      "the punch line wrong",
      "the guy is wrong",
      "my favorite song"
    ],
    "the punch line wrong"
  ),
  new QuizQuestion(
    "I guess I just lost my husband\nI don't know where he went\nSo I'm gonna ....",
    [
      "spend his money",
      "drink my money",
      "drink his money",
      "spend my money",
    ],
    "drink my money",
  ),
  new QuizQuestion(
    "Party rock is in the house tonight\nEverybody just have a good time (yeah)\nAnd we gon' make .....",
    [
      "you cruise around",
      "you lose your mind",
      "lose your ground",
      "move around"
    ],
    "you lose your mind"
  ),
  new QuizQuestion(
    "My head's under water\nBut I'm breathing fine\nYou're crazy and I'm ...",
    [
      "out of my mind",
      "losing my mind",
      "pulled to the ground",
      "stuck in my mind"
    ],
    "out of my mind"
  ),
  new QuizQuestion(
    "The best thing about bein' a woman\nIs the prerogative to have a little.... and",
    [
      "fun",
      "bum",
      "run",
      "rum"
    ],
    "fun"
  ),
  new QuizQuestion(
    "A little bit of Monica in my life\nA little bit of Erica by my side\nA little bit of Rita's ....",
    [
      "all I need",
      "by the sea",
      "It will be",
      "what i need"
    ],
    "all I need"
  ),
  new QuizQuestion(
    "When the night has come\nAnd the land is dark\n... is the only light we'll see",
    [
      "And the stars",
      "And the fire",
      "And your charm",
      "And the moon"
    ],
    "And the moon"
  ),
  new QuizQuestion(
    "Yesterday, all my troubles seemed so far away\nNow they look as though ...\nOh, I believe in yesterday",
    [
      "they came to stay",
      "they're here to stay",
      "they fade away",
      "they walked away"
    ],
    "they're here to stay"
  ),
    new QuizQuestion(
      "I'm just a poor boy, ....\nBecause I'm easy come, easy go\nLittle high, little low",
      [
        "I need no sympathy",
        "I need no company",
        "I have your sympathy",
        "Give me your sympathy"
      ],
      "I need no sympathy"
    ),
    new QuizQuestion(
      "When I find myself in times of trouble, Mother Mary comes to me\n.... let it be",
      [
        "whispers of tomorrow",
        "Speaking words of wisdom,",
        "singing words of wisdom,",
        "sharing words of wisdom"
      ],
      "Speaking words of wisdom,"
    ),
    new QuizQuestion(
      "You may say I'm a dreamer\nBut I'm not the only one\nI hope someday ....\nAnd the world will be as one",
      [
        "you'll come home",
        "you'll join us",
        "they'll join us",
        "we'll live as one"
      ],
      "you'll join us"
    ),
    new QuizQuestion(
      "And if I only could\nI'd make a deal with God\nAnd I'd get Him ....",
      [
        "to swap our places",
        "to fill our spaces",
        "to trade our dreams",
        "to swap our spaces"
      ],
      "to swap our places"
    ),
    new QuizQuestion(
      "There were sounds in my head, little voices whispering\nThat I should go and this should end....",
      [
        "All lies in the end",
        "But I still pretend",
        "As I reached the end",
        "Oh, and I found myself listening"
      ],
      "Oh, and I found myself listening"
    ),
    new QuizQuestion(
      "Oh, thinkin' about all our younger years\nThere was only you and me",
      [
        "We thought forever was ours to keep",
        "There was time and love was free",
        "We were young and wild and free",
        "We believed in eternity"
      ],
      "We were young and wild and free"
    ),
    
    new QuizQuestion(
      "..., every step you take\nI'll be watchin' you",
      [
        "Every move you make",
        "Every word you say",
        "Every dream you chase",
        "Every road you take"
      ],
      "Every move you make"
    ),
  
    new QuizQuestion(
      "I saw him dancing there by the record machine\nI knew he must have ...\nThe beat was going strong, playing my favorite song",
      [
        "standing so keen",
        "about seventeen",
        "a vibe that was so mean",
        "nineteen"
      ],
      "about seventeen"
    ),
  
    new QuizQuestion(
      "But I'm a creep, I'm a weirdo\nWhat the hell ...\nI don't belong here",
      [
        "am I doin' here?",
        "is wrong with me?",
        "are we doing here?",
        "can I belong here?"
      ],
      "am I doin' here?"
    ),
    new QuizQuestion(
      "Get it right the first time\n...\nI can't afford to let it pass",
      [
        "Or it's not the same thing",
        "but get it right the next time",
        "to make it all plain",
        "That's the main thing"
      ],
      "That's the main thing"
    ),
    new QuizQuestion(
      "It's nine o'clock on a Saturday\nThe regular crowd shuffles in\nThere's an old man sittin' next to me\n....",
      [
        "Makin' love to his gin and tonic",
        "Makin' love to his tonic and gin",
        "Playing notes of a slow dance",
        "Humming a tune from the good old days"
      ],
      "Makin' love to his tonic and gin"
    ),  
  new QuizQuestion(
    "You'll know it's all because of you, we can do whatever we want to ....",
    [
      "You'll see there's nothing we can't do.",
      "This one's for you.",
      "Hey there Delilah, here's to you.",
      "I’ll be the one you can’t refuse."
    ],
    "Hey there Delilah, here's to you."
  ),
  new QuizQuestion(
    "I walked across an empty land\nI knew the pathway like the back of my hand\nI felt the earth ....",
    [
      "trembling at my feet",
      "moving under my feet",
      "beneath my feet",
      "giving way beneath"
    ],
    "beneath my feet"
  ),
  new QuizQuestion(
    "I don't want anybody else\nWhen I think about you, ....",
    [
      "my heart swells",
      "I touch myself",
      "I lose myself",
      "I start to melt"
    ],
    "I touch myself"
  ),
  new QuizQuestion(
    "And when I touch you, I feel happy inside\nIt's such a feelin' that my love ....",
    [
      "I get high",
      "I can't hide",
      "I can fly",
      "I could cry"
    ],
    "I can't hide"
  ),
  new QuizQuestion(
    "I got my first ....\nBought it at the five and dime",
    [
      "real clean swing",
      "real sex dream",
      "real cheap thing",
      "real six string"
    ],
    "real six string"
  ),
  new QuizQuestion(
    "Oh, I'm just a girl, my apologies\nWhat I've become is ....\nOh, I'm just a girl, lucky me",
    [
      "so troublesome",
      "a shadow to some",
      "so burdensome",
      "making me numb"
    ],
    "so burdensome"
  ),
  new QuizQuestion(
    "Oh, it's a nice day to start again\nCome on, nice day for a ....",
    [
      "white wedding day",
      "bright sunny day",
      "wild wedding day",
      "cold winter day"
    ],
    "white wedding day"
  ),
  new QuizQuestion(
    "How they dance in the courtyard, sweet summer sweat\nSome dance to remember, ....",
    [
      "some dance to forget",
      "some dance for a bet",
      "some dance with regret",
      "some dance to reset"
    ],
    "some dance to forget"
  )
  // More QuizQuestions can be added here
];

/**
 * Shuffles the order of the provided quiz questions
 * and also shuffles the order of the answers for each question.
 *
 * @param {QuizQuestion[]} quizQuestions - The array of QuizQuestion objects to shuffle.
 * @returns {QuizQuestion[]} - The shuffled array of QuizQuestions with shuffled answers.
 */
export const createGameQuestions = (quizQuestions: QuizQuestion[], sessionCount: number = 0): QuizQuestion[] => {
  if (sessionCount < 1) {
    // Shuffle the quiz questions array
    shuffleArray(quizQuestions).forEach((quizQuestion) => {
      // Shuffle the answers within each question
      quizQuestion.answers = shuffleArray(quizQuestion.answers);
    });
  }
  
  // Return the array of questions
  return quizQuestions;
};

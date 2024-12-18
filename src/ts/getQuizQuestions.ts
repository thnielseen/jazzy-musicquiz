// Interface representing an answer object
export interface IAnswer {
  answer: string;       // The text of the answer
  isCorrect: boolean;   // Indicates if the answer is correct
}

// Interface representing a question object
export interface IQuestion {
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

// Class representing a question
 export class Question implements IQuestion {
  question: string;                // The text of the question
  answers: Answer[];               // An array of Answer objects
  correctAnswer: string;           // The correct answer as a string
  userAnswer: string | null;       // The user's selected answer (null if unanswered)
  timeTaken: number;               // The time taken by the user to answer (in seconds)
  isUserAnswerCorrect: boolean | null; // Indicates if the user's answer is correct
  score: number;                   // The score awarded for the question

  /**
   * Constructor for the Question class.
   * @param question - The text of the question.
   * @param answers - An array of possible answers as strings.
   * @param correctAnswer - The correct answer as a string.
   * 
   * The constructor initializes the question properties and converts the 
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
   * Calculates the score for the question based on the user's performance.
   * @returns The calculated score as a number.
   * 
   * Scoring rules:
   * - 0 points if the user's answer is incorrect.
   * - 1 point if the time taken exceeds 60 seconds.
   * - 10 points if the user answers correctly within 10 seconds.
   * - For times between 10 and 60 seconds, the score decreases linearly from 10 to 1.
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
export const quizQuestions: Question[] = [
  new Question(
    "Trying to keep up with you, And I don't know if I can do it, Oh no ....",
    [
      "You had too much",
      "I've said too much",
      "I've had enough",
      "I'm losing touch"
    ],
    "I've said too much"
    
  ),
  new Question(
    "Another turning point, a fork stuck in the road\nTime grabs you by the wrist, ..... ",
    [
      "Directs you down the road",
      "Asks you where to go",
      "Directs you where to go",
      "Lead you where to go"
    ],
    "Directs you where to go"
  ),
  new Question(
    "I'm wastin' my time, I got nothin' to do\nI'm hangin' around, ....",
    [
      "I'm waitin' for you",
      "I'm dreamin' of you",
      "I'm thinkin' of you",
      "I'm talkin' to you"
    ],
    "I'm waitin' for you"
  ),
  new Question(
    "I'll be your dream, I'll be your wish, I'll be your fantasy\nI'll be your hope, I'll be your love, ....",
    [
      "Be the guidance you'd seek",
      "Be everything that you need",
      "Lay by your side when you sleep",
      "Be everything you could need"
    ],
    "Be everything that you need"
  ),
  new Question(
    "You want what you can't have, ooh girl, that's too damn bad. Don't touch what you can't grab ....",
    [
      "End up with two backhands.",
      "You’ll land where you can’t stand.",
      "You’ll fall right where you stand.",
      "You chase what you can’t catch."
    ],
    "End up with two backhands."
  ),
  new Question(
    "When I see your face\nThere's not a ....\n'Cause you're amazing\nJust the way you are",
    [
      "thing that I could change",
      "thing that I would change",
      "thing to replace",
      "thing I could say",
      "thing I could erase"
    ],
    "thing that I would change"
  ),
  new Question(
    "You think I'm pretty without any makeup on\nYou think I'm funny when I tell ....",
    [
      "the joke too long",
      "the punch line wrong",
      "the guy is wrong",
      "my favorite song"
    ],
    "the punch line wrong"
  ),
  new Question(
    "I guess I just lost my husband\nI don't know where he went\nSo I'm gonna ....",
    [
      "spend his money",
      "drink my money",
      "drink his money",
      "spend my money",
      "act all funny"
    ],
    "spend his money"
  ),
  new Question(
    "Party rock is in the house tonight\nEverybody just have a good time (yeah)\nAnd we gon' make .....",
    [
      "you cruise around",
      "you lose your mind",
      "lose your ground",
      "move around"
    ],
    "you lose your mind"
  ),
  new Question(
    "My head's under water\nBut I'm breathing fine\nYou're crazy and I'm ...",
    [
      "out of my mind",
      "losing my mind",
      "pulled to the ground",
      "stuck in my mind"
    ],
    "out of my mind"
  ),
  new Question(
    "The best thing about bein' a woman\nIs the prerogative to have a little.... and",
    [
      "fun",
      "bum",
      "run",
      "rum"
    ],
    "fun"
  ),
  new Question(
    "A little bit of Monica in my life\nA little bit of Erica by my side\nA little bit of Rita's ....",
    [
      "all I need",
      "by the sea",
      "It will be",
      "what i need"
    ],
    "all I need"
  ),
  new Question(
    "When the night has come\nAnd the land is dark\n... is the only light we'll see",
    [
      "And the stars",
      "And the fire",
      "And your charm",
      "And the moon"
    ],
    "And the moon"
  ),
  new Question(
    "Yesterday, all my troubles seemed so far away\nNow they look as though ...\nOh, I believe in yesterday",
    [
      "they came to stay",
      "they're here to stay",
      "they fade away",
      "they walked away"
    ],
    "they're here to stay"
  ),
    new Question(
      "I'm just a poor boy, ....\nBecause I'm easy come, easy go\nLittle high, little low",
      [
        "I need no sympathy",
        "I need no company",
        "I have your sympathy",
        "Give me your sympathy"
      ],
      "I need no sympathy"
    ),
    new Question(
      "When I find myself in times of trouble, Mother Mary comes to me\n.... let it be",
      [
        "whispers of tomorrow",
        "Speaking words of wisdom,",
        "singing words of wisdom,",
        "sharing words of wisdom"
      ],
      "Speaking words of wisdom,"
    ),
    new Question(
      "You may say I'm a dreamer\nBut I'm not the only one\nI hope someday ....\nAnd the world will be as one",
      [
        "you'll come home",
        "you'll join us",
        "they'll join us",
        "we'll live as one"
      ],
      "you'll join us"
    ),
    new Question(
      "And if I only could\nI'd make a deal with God\nAnd I'd get Him ....",
      [
        "to swap our places",
        "to fill our spaces",
        "to trade our dreams",
        "to swap our spaces"
      ],
      "to swap our places"
    ),
    new Question(
      "There were sounds in my head, little voices whispering\nThat I should go and this should end....",
      [
        "All lies in the end",
        "But I still pretend",
        "As I reached the end",
        "Oh, and I found myself listening"
      ],
      "Oh, and I found myself listening"
    ),
    new Question(
      "Oh, thinkin' about all our younger years\nThere was only you and me",
      [
        "We thought forever was ours to keep",
        "There was time and love was free",
        "We were young and wild and free",
        "We believed in eternity"
      ],
      "We were young and wild and free"
    ),
    
    new Question(
      "..., every step you take\nI'll be watchin' you",
      [
        "Every move you make",
        "Every word you say",
        "Every dream you chase",
        "Every road you take"
      ],
      "Every move you make"
    ),
  
    new Question(
      "I saw him dancing there by the record machine\nI knew he must have ...\nThe beat was going strong, playing my favorite song",
      [
        "standing so keen",
        "about seventeen",
        "a vibe that was so mean",
        "nineteen"
      ],
      "about seventeen"
    ),
  
    new Question(
      "But I'm a creep, I'm a weirdo\nWhat the hell ...\nI don't belong here",
      [
        "am I doin' here?",
        "is wrong with me?",
        "are we doing here?",
        "can I belong here?"
      ],
      "am I doin' here?"
    ),
    new Question(
      "Get it right the first time\n...\nI can't afford to let it pass",
      [
        "Or it's not the same thing",
        "but get it right the next time",
        "to make it all plain",
        "That's the main thing"
      ],
      "That's the main thing"
    ),
    new Question(
      "It's nine o'clock on a Saturday\nThe regular crowd shuffles in\nThere's an old man sittin' next to me\n....",
      [
        "Makin' love to his gin and tonic",
        "Makin' love to his tonic and gin",
        "Playing notes of a slow dance",
        "Humming a tune from the good old days"
      ],
      "Makin' love to his tonic and gin"
    ),  
  new Question(
    "You'll know it's all because of you, we can do whatever we want to ....",
    [
      "You'll see there's nothing we can't do.",
      "This one's for you.",
      "Hey there Delilah, here's to you.",
      "I’ll be the one you can’t refuse."
    ],
    "Hey there Delilah, here's to you."
  ),
  new Question(
    "I walked across an empty land\nI knew the pathway like the back of my hand\nI felt the earth ....",
    [
      "trembling at my feet",
      "moving under my feet",
      "beneath my feet",
      "giving way beneath"
    ],
    "beneath my feet"
  ),
  new Question(
    "I don't want anybody else\nWhen I think about you, ....",
    [
      "my heart swells",
      "I touch myself",
      "I lose myself",
      "I start to melt"
    ],
    "I touch myself"
  ),
  new Question(
    "And when I touch you, I feel happy inside\nIt's such a feelin' that my love ....",
    [
      "I get high",
      "I can't hide",
      "I can fly",
      "I could cry"
    ],
    "I can't hide"
  ),
  new Question(
    "I got my first ....\nBought it at the five and dime",
    [
      "real clean swing",
      "real sex dream",
      "real cheap thing",
      "real six string"
    ],
    "real six string"
  ),
  new Question(
    "Oh, I'm just a girl, my apologies\nWhat I've become is ....\nOh, I'm just a girl, lucky me",
    [
      "so troublesome",
      "a shadow to some",
      "so burdensome",
      "making me numb"
    ],
    "so burdensome"
  ),
  new Question(
    "Oh, it's a nice day to start again\nCome on, nice day for a ....",
    [
      "white wedding day",
      "bright sunny day",
      "wild wedding day",
      "cold winter day"
    ],
    "white wedding day"
  ),
  new Question(
    "How they dance in the courtyard, sweet summer sweat\nSome dance to remember, ....",
    [
      "some dance to forget",
      "some dance for a bet",
      "some dance with regret",
      "some dance to reset"
    ],
    "some dance to forget"
  )
  // More questions can be added here
];


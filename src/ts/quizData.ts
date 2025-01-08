import { QuizQuestion } from "./getQuizQuestions";

/**
 * Array of quiz questions about song lyrics.
 * Each question contains a partial lyric with a missing section,
 * multiple choice options, and the correct answer.
 * 
 * Questions are structured using the QuizQuestion class which handles:
 * - Question text with missing lyrics marked by [_______]
 * - Array of 4 possible answer choices 
 * - The correct answer string
 * 
 * @type {QuizQuestion[]}
 * 
 * @example
 * // Example question structure:
 * new QuizQuestion(
 *   "Partial lyric with [_______] placeholder",
 *   ["option1", "option2", "option3", "option4"],
 *   "correct answer"
 * )
 */
export const quizQuestions: QuizQuestion[] = [
  // Questions array containing multiple QuizQuestion instances
  new QuizQuestion(
    "Trying to keep up with you, and I don't know if I can do it, oh no [ _______ ]",
    [
      "You had too much",
      "I've said too much",
      "I've had enough",
      "I'm losing touch"
    ],
    "I've said too much"
    
  ),
  new QuizQuestion(
    "Another turning point, a fork stuck in the road <br> Time grabs you by the wrist, [ _______ ]",
    [
      "directs you down the road",
      "asks you where to go",
      "directs you where to go",
      "lead you where to go"
    ],
    "directs you where to go"
  ),
  new QuizQuestion(
    "I'm wastin' my time, I got nothin' to do <br> I'm hangin' around, [ _______ ]",
    [
      "I'm waitin' for you",
      "I'm dreamin' of you",
      "I'm thinkin' of you",
      "I'm talkin' to you"
    ],
    "I'm waitin' for you"
  ),
  new QuizQuestion(
    "I'll be your dream, I'll be your wish, I'll be your fantasy <br> I'll be your hope, I'll be your love, [ _______ ]",
    [
      "be the guidance you'd seek",
      "be everything that you need",
      "lay by your side when you sleep",
      "be everything you could need"
    ],
    "be everything that you need"
  ),
  new QuizQuestion(
    "You want what you can't have, oh girl that's too damn bad <br> Don't touch what you can't grab, [ _______ ]",
    [
      "End up with two backhands.",
      "You’ll land where you can’t stand.",
      "You’ll fall right where you stand.",
      "You chase what you can’t catch."
    ],
    "End up with two backhands."
  ),
  new QuizQuestion(
    "When I see your face <br> There's not a [ _______ ] <br> 'Cause you're amazing <br> Just the way you are",
    [
      "thing that I could change",
      "thing to replace",
      "thing I could say",
      "thing I could erase"
    ],
    "thing that I would change"
  ),
  new QuizQuestion(
    "You think I'm pretty without any makeup on <br> You think I'm funny when I tell [ _______ ]",
    [
      "the joke too long",
      "the punch line wrong",
      "the guy is wrong",
      "my favorite song"
    ],
    "the punch line wrong"
  ),
  new QuizQuestion(
    "I guess I just lost my husband <br> I don't know where he went <br> So I'm gonna [ _______ ]",
    [
      "spend his money",
      "drink my money",
      "drink his money",
      "spend my money",
    ],
    "drink my money",
  ),
  new QuizQuestion(
    "Party rock is in the house tonight <br> Everybody just have a good time (yeah) <br> And we gon' make [ _______ ]",
    [
      "you cruise around",
      "you lose your mind",
      "lose your ground",
      "move around"
    ],
    "you lose your mind"
  ),
  new QuizQuestion(
    "My head's under water <br> But I'm breathing fine <br> You're crazy and I'm [ _______ ]",
    [
      "out of my mind",
      "losing my mind",
      "pulled to the ground",
      "stuck in my mind"
    ],
    "out of my mind"
  ),
  new QuizQuestion(
    "The best thing about bein' a woman <br> Is the prerogative to have a little [ _______ ] and",
    [
      "fun",
      "bum",
      "run",
      "rum"
    ],
    "fun"
  ),
  new QuizQuestion(
    "A little bit of Monica in my life <br> A little bit of Erica by my side <br> A little bit of Rita's [ _______ ]",
    [
      "all I need",
      "in the sun",
      "what I see",
      "what I need"
    ],
    "all I need"
  ),
  new QuizQuestion(
    "When the night has come <br> And the land is dark <br> [ _______ ] is the only light we'll see",
    [
      "And the stars",
      "And the fire",
      "And your charm",
      "And the moon"
    ],
    "And the moon"
  ),
  new QuizQuestion(
    "Yesterday, all my troubles seemed so far away <br> Now they look as though [ _______ ] <br> Oh, I believe in yesterday",
    [
      "they came to stay",
      "they're here to stay",
      "they fade away",
      "they walked away"
    ],
    "they're here to stay"
  ),
    new QuizQuestion(
      "I'm just a poor boy, [ _______ ] <br> Because I'm easy come, easy go <br> Little high, little low",
      [
        "I need no sympathy",
        "I need no company",
        "I have your sympathy",
        "give me your sympathy"
      ],
      "I need no sympathy"
    ),
    new QuizQuestion(
      "When I find myself in times of trouble, Mother Mary comes to me <br> [ _______ ], let it be",
      [
        "Whispers of tomorrow",
        "Speaking words of wisdom",
        "Singing words of wisdom",
        "Sharing words of wisdom"
      ],
      "Speaking words of wisdom,"
    ),
    new QuizQuestion(
      "You may say I'm a dreamer <br> But I'm not the only one <br> I hope someday [ _______ ] <br> And the world will be as one",
      [
        "you'll come home",
        "you'll join us",
        "they'll join us",
        "we'll live as one"
      ],
      "you'll join us"
    ),
    new QuizQuestion(
      "And if I only could <br> I'd make a deal with God <br> And I'd get Him [ _______ ]",
      [
        "to swap our places",
        "to fill our spaces",
        "to trade our dreams",
        "to swap our spaces"
      ],
      "to swap our places"
    ),
    new QuizQuestion(
      "There were sounds in my head <br> Of little voices whispering <br> That I should go and this should end <br> [ _______ ]",
      [
        "All lies in the end",
        "But I still pretend",
        "As I reached the end",
        "Oh, and I found myself listening"
      ],
      "Oh, and I found myself listening"
    ),
    new QuizQuestion(
      "Oh, thinkin' about all our younger years <br> There was only you and me <br>  [ _______ ]",
      [
        "We thought forever was ours to keep",
        "There was time and love was free",
        "We were young and wild and free",
        "We believed in eternity"
      ],
      "We were young and wild and free"
    ),
    
    new QuizQuestion(
      "[ _______ ], every step you take <br> I'll be watchin' you",
      [
        "Every move you make",
        "Every word you say",
        "Every dream you chase",
        "Every road you take"
      ],
      "Every move you make"
    ),
  
    new QuizQuestion(
      "I saw him dancing there by the record machine <br> I knew he must have [ _______ ] <br> The beat was going strong, playing my favorite song",
      [
        "been feeling so keen",
        "been about seventeen",
        "had a vibe that was so mean",
        "been just nineteen"
      ],
      "been about seventeen"
    ),
  
    new QuizQuestion(
      "But I'm a creep, I'm a weirdo <br> What the hell [ _______ ] <br> I don't belong here",
      [
        "am I doin' here?",
        "is wrong with me?",
        "are we doing here?",
        "can I belong here?"
      ],
      "am I doin' here?"
    ),
    new QuizQuestion(
      "Get it right the first time <br> [ _______ ] <br> I can't afford to let it pass",
      [
        "Or it's not the same thing",
        "But get it right the next time",
        "To make it all plain",
        "That's the main thing"
      ],
      "That's the main thing"
    ),
    new QuizQuestion(
      "It's nine o'clock on a Saturday <br> The regular crowd shuffles in <br> There's an old man sittin' next to me <br> [ _______ ]",
      [
        "Makin' love to his gin and tonic",
        "Makin' love to his tonic and gin",
        "Playing notes of a slow dance",
        "Humming a tune from the good old days"
      ],
      "Makin' love to his tonic and gin"
    ),  
    new QuizQuestion(
      "You'll know it's all because of you <br> We can do whatever we want to <br> [ _______ ]",
      [
        "You'll see there's nothing we can't do.",
        "Hey there, this one's for you.",
        "Hey there Delilah, here's to you.",
        "I’ll be the one you can’t refuse."
      ],
      "Hey there Delilah, here's to you."
    ),
    new QuizQuestion(
      "I walked across an empty land <br> I knew the pathway like the back of my hand <br> I felt the earth [ _______ ]",
      [
        "trembling at my feet",
        "moving under my feet",
        "beneath my feet",
        "giving way beneath"
      ],
      "beneath my feet"
    ),
    new QuizQuestion(
      "I don't want anybody else <br> When I think about you, [ _______ ]",
      [
        "my heart swells",
        "I touch myself",
        "I lose myself",
        "I start to melt"
      ],
      "I touch myself"
    ),
    new QuizQuestion(
      "And when I touch you, I feel happy inside <br> It's such a feelin' that my love <br> [ _______ ]",
      [
        "I get high",
        "I can't hide",
        "I can fly",
        "I could cry"
      ],
      "I can't hide"
    ),
    new QuizQuestion(
      "I got my first [ _______ ] <br> Bought it at the five and dime",
      [
        "real clean swing",
        "real sex dream",
        "real cheap thing",
        "real six string"
      ],
      "real six string"
    ),
    new QuizQuestion(
      "Oh, I'm just a girl, my apologies <br> What I've become is [ _______ ] <br> Oh, I'm just a girl, lucky me",
      [
        "so troublesome",
        "a shadow to some",
        "so burdensome",
        "making me numb"
      ],
      "so burdensome"
    ),
    new QuizQuestion(
      "Oh, it's a nice day to start again <br> Come on, nice day for a [ _______ ]",
      [
        "white wedding day",
        "bright sunny day",
        "wild wedding day",
        "cold winter day"
      ],
      "white wedding day"
    ),
    new QuizQuestion(
      "How they dance in the courtyard, sweet summer sweat <br> Some dance to remember, [ _______ ]",
      [
        "some dance to forget",
        "some dance for a bet",
        "some dance with regret",
        "some dance to reset"
      ],
      "some dance to forget"
    )
  ];
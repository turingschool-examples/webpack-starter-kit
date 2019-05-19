const data = {
  response_code: {
    version: '1.2',
    termsofService: 'http://frontend.turing.io/projects/wheel-of-fortune.html',
    features: {
      wheel: 1,
      puzzles: 1
    },
  },
  wheel: [
    900,
    'BANKRUPT',
    'LOSE A TURN',
    700,
    500,
    200
  ],
  puzzles: {
    one_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 8,
          first_word: 8, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Armchair',
        }
      ]
    },
    two_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 2,
          total_number_of_letters: 11,
          first_word: 7, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Amusing Yarn',
        },
        {  
          category: 'The 90s',
          number_of_words: 2,
          total_number_of_letters: 9,
          first_word: 5, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'South Park',
        }
      ]
    },
    three_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 3,
          total_number_of_letters: 10,
          first_word: 3, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Hot Glue Gun',
        }
      ]
    },
    four_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 4,
          total_number_of_letters: 17,
          first_word: 4, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Roll Of Toilet Paper',
        }
      ]
    }
  }
};

export default data;
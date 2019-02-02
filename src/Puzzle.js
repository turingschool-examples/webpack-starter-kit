import domUpdates from './domUpdates.js';

class Puzzle {
  constructor(puzzleObj) {
    this.category = puzzleObj.category;
    this.numberWords = puzzleObj.number_of_words;
    this.totalLetters = puzzleObj.total_number_of_letters;
    this.firstWord = puzzleObj.first_word;
    this.description = puzzleObj.description;
    this.answer = puzzleObj.correct_answer;
  }
}

export default Puzzle;

// category:'Around The House',
//           number_of_words: 4,
//           total_number_of_letters: 12,
//           first_word: 1,
//           description: 'Location or object(s) found within a typical house.',
//           correct_answer: 'A Pile Of Coats',
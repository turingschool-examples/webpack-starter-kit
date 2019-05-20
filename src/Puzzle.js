import Data from './Data';

class Puzzle {
  constructor(puzzleData) {
    this.category = puzzleData.category;
    this.numberOfWords = puzzleData.number_of_words;
    this.totalNumberofLetters = puzzleData.total_number_of_letters;
    this.firstWordLength = puzzleData.first_word;
    this.description = puzzleData.description;
    this.correctAnswer = [...puzzleData.correct_answer];
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }

  evaluateLetter(guess) {
    // this.correctAnswer.includes(guess);
    // if true, push letter into this.correctGuesses
    // if false, push letter into this.incorrectGuesses
  }

  evaluateSolve(guess) {
    // return boolean;
  }
}

export default Puzzle;
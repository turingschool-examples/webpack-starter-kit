import Data from './Data';

class Puzzle {
  constructor(category, numberOfWords, totalNumberofLetters, firstWordLength, description, correctAnswer) {
    this.category = category;
    this.numberOfWords = numberOfWords;
    this.totalNumberofLetters = totalNumberofLetters;
    this.firstWordLength = firstWordLength;
    this.description = description;
    this.correctAnswer = [...correctAnswer];
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
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
    if (this.correctAnswer.includes(guess)) {
      this.correctGuesses.push(guess);
    } else {
      this.incorrectGuesses.push(guess);
    }
  }

  evaluateSolve(guess) {
    return this.correctAnswer.join('') == guess;
  }
}

export default Puzzle;
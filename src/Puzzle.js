import data from './data.js';

class Puzzle {
  constructor() {
    // this.category = null;
    // this.answer = null;
    this.hint = null;
    this.puzzleDetails = null;
    this.difficulty = null;
    this.domDifficulty = null;
    this.category = null;
    this.answer = [];

  }
  chooseDifficulty() {
    let result = null;
    let randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber === 4) {
      result = data.puzzles.four_word_answers;
    } else if (randomNumber === 3) {
      result = data.puzzles.three_word_answers;
    } else if (randomNumber === 2) {
      result = data.puzzles.two_word_answers;
    } else {
      result = data.puzzles.one_word_answers;
    }
    this.difficulty = result;
    console.log(this.difficulty)
  }
  randomizePuzzle() {
    let randomIndex = Math.floor(Math.random() * this.difficulty.puzzle_bank.length);
    this.puzzleDetails = this.difficulty.puzzle_bank[randomIndex];
    this.answer = this.puzzleDetails.correct_answer;
    this.domDifficulty = this.puzzleDetails.number_of_words;
    this.category = this.puzzleDetails.category;
    console.log(this.difficulty);
    console.log("puzzle answer for the dom:", this.answer);
    console.log("puzzle difficulty:", this.domDifficulty);
    console.log("puzzle category:", this.category);
    this.divideAnswer();
    return this.puzzleDetails;
  }
  divideAnswer() {
    let splitAnswer = this.answer.split('');
    console.log(splitAnswer);
  }
};

export default Puzzle;
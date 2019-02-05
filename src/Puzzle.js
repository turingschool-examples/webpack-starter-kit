import data from './data.js';

class Puzzle {
  constructor() {
    // this.category = null;
    // this.answer = null;
    this.hint = null;
    this.puzzleDetails = null;
    this.difficulty = null;
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
    // NEW ADDITIONS
    // let puzzleBank = this.difficulty.puzzle_bank;
    // puzzleBank[randomNumber]
    // console.log("difficulty", puzzleBank)
  }
  randomizePuzzle() {
    let randomIndex = Math.floor(Math.random() * this.difficulty.puzzle_bank.length);
    this.puzzleDetails = this.difficulty.puzzle_bank[randomIndex];
    this.answer.push(this.puzzleDetails.correct_answer);
    let puzzleBank = this.difficulty.puzzle_bank;
    puzzleBank[randomIndex]
    console.log("difficulty", puzzleBank[randomIndex].correct_answer)
    return this.puzzleDetails;
  }
  randomizeAnswer() {


  }
};

export default Puzzle;
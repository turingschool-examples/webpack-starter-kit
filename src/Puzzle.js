import data from './data.js';

class Puzzle {
  constructor() {
    // this.category = null;
    // this.answer = null;
    this.description = null;
    this.difficulty = null;

  }
  chooseDifficulty() {
    let randomNumber = Math.floor(Math.random() * 5);
    this.difficulty = randomNumber;
  }
  randomPuzzle(difficulty) {
    let randomIndex = Math.floor(Math.random() * difficulty.puzzle_bank.length);
    this.description = difficulty.puzzle_bank[randomIndex];
    return this.description;
  }
  randomizeAnswer() {


  }
};

export default Puzzle;
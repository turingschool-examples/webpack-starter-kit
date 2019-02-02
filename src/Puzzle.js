import data from './data.js';

class Puzzle {
  constructor() {
    this.category = null;
    this.answer = null;
    this.description = null;

  }
  chooseDifficulty() {

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
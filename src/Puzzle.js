import data from './data.js';

class Puzzle {
  constructor() {
    this.category = null;
    this.answer = null;
  }
  chooseDifficulty() {

  }
  randomPuzzle(difficulty) {
    let randomIndex = Math.floor(Math.random() * difficulty.puzzle_bank.length);
    return difficulty.puzzle_bank[randomIndex];
  }
  randomizeAnswer() {
    // let randomAnswer = random number;
    this.answer = randomAnswer;
  }
};

export default Puzzle;
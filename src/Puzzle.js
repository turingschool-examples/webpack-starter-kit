import Game from './Game.js';
import domUpdates from './domUpdates.js';

class Puzzle {
  constructor(puzzle) {
    this.guessedBank = [];
    this.categories = puzzle.category;
    this.description = puzzle.description;
    this.answer = puzzle.correct_answer;
    this.numWords = puzzle.number_of_words;
  }
}

export default Puzzle;
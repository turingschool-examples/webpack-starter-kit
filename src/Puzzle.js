// import Wheel from "./Wheel.js";
import Game from "./Game.js";
import Round from "./Round.js";
import Player from "./Player.js";
// import domUpdates from "./domUpdates.js";

class Puzzle {
  constructor(puzzle) {
  this.category = null || puzzle.category;
  this.correctAnswer = null || puzzle.correct_answer;
  this.description = null || puzzle.description;
  this.totalLetters = null || puzzle.total_number_of_letters;
  this.numWords = null || puzzle.number_of_words;
  this.splitAnswer = this.correctAnswer.split('');
  }


}


export default Puzzle;

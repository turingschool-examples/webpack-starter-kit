// import Wheel from "./Wheel.js";
import Game from "./Game.js";
import Round from "./Round.js";
import Player from "./Player.js";
import data from "./data.js";
// import domUpdates from "./domUpdates.js";

class Puzzle {
  constructor(currentPuzzle) {
    this.category = null || currentPuzzle.category;
    this.correctAnswer = null || currentPuzzle.correct_answer;
    this.description = null || currentPuzzle.description;
    this.totalLetters = null || currentPuzzle.total_number_of_letters;
    this.numWords = null || currentPuzzle.number_of_words;
    this.splitAnswer = this.correctAnswer.toUpperCase().split('');
    this.secondLine = null || currentPuzzle.secondLine;
  }
  checkPuzLength() {
    return this.splitAnswer.length > 14 ? this.twoLinePuzzle() : this.secondLine = null;
  }

  twoLinePuzzle() {
    let words = this.correctAnswer.split(' ');
    let firstLine; 
    let secondLine;
    if (this.numWords === 2) {
      firstLine = words[0];
      secondLine = words[1];
    } else if (this.numWords === 3) {
      firstLine = words[0].concat(` ${words[1]}`);
      secondLine = words[2];
    } else {
      firstLine = words[0].concat(` ${words[1]}`);
      secondLine = words[2].concat(` ${words[3]}`);
    }
    this.splitAnswer = firstLine.toUpperCase().split('');
    this.secondLine = secondLine.toUpperCase().split('');
    // console.log('1st', this.splitAnswer, '2nd', this.secondLine);
  }

}


export default Puzzle;



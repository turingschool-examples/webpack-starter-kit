// import Wheel from "./Wheel.js";
// import data from "./data.js";
import Game from "./Game.js";
// import Round from "./Round.js";
// import Player from "./Player.js";
// import domUpdates from "./domUpdates.js";

class Puzzle {
  constructor() {

  this.hint = null;
  this.puzzleobj = null;
  this.splitPhrase = null;
  this.category = null;
  this.difficulty = null;

  }



  puzzleSet(array){
    let randomNum = 0;
    this.puzzleobj = array.splice();
    splitPhrase(puzzleobj);
    this.category = this.puzzleobj.category;
    this.difficulty = game.round;
    this.hint = this.puzzleobj.description

  }

  splitPhrase(obj){
    this.splitPhrase.push(obj.correctAnswer)
    this.splitPhrase = this.splitPhrase.split(' ');
  }

}


export default Puzzle;
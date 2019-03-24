// import Game from "./Game.js";
// import Round from "./Round.js";
// import Player from "./Player.js";
// import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";
import data from "./data.js";


class Wheel {
  constructor() {
  this.values = data.wheel;
  this.currentSpin = null;
  this.currentIndex = null;
  }

  makeWheelVals() {
    let wheelData = data.wheel;
    console.log(wheelData);
  }

  spinWinner(index) {
    this.currentSpin = this.values[index];
    console.log(this.currentSpin);
  }


}

export default Wheel;
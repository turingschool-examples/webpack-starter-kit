// import Game from "./Game.js";
// import Round from "./Round.js";
// import Player from "./Player.js";
// import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";
import data from "./data.js";


class Wheel {
  constructor() {
  this.values = [];
  this.currentSpin = null;
  this.currentIndex = null;

  }

  makeWheelVals(data) {
    let wheelData = data.wheel;
    console.log(wheelData)
  }


}

export default Wheel;
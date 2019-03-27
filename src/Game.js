import Wheel from "./Wheel.js";
import Round from "./Round.js";
import Player from "./Player.js";
import BonusWheel from "./BonusWheel.js"
import data from "./data.js";
import domUpdates from "./domUpdates.js";

class Game {
  constructor() {
    this.round = null;
    this.roundCount  = 0;
    this.players = [];
    this.allData = []

  }

  startGame() {
    let wheel = new Wheel();
    wheel.makeWheelVals(data.wheel)
    this.createPlayers(domUpdates.playerNames());
    this.getRandomData();
    this.createRound(wheel)
  }

  getRandomData () {
    let puzzlesArr = Object.keys(data.puzzles)
    puzzlesArr.forEach(puzzleCat =>{
      this.allData.push(data.puzzles[puzzleCat].puzzle_bank)
    })
  }

  createRound (wheel) {
    this.roundCount++;
    if (this.roundCount === 4) {
      let wheel = new BonusWheel();    
    }
    let round = new Round(this.players, wheel);
    this.round = round;
    round.currentWheel = wheel;
    // this.rounds.push(round);
    let currentPuzzle = round.getPuzzle(this.allData[this.roundCount - 1]);
    currentPuzzle.checkPuzLength();
    domUpdates.appendPuzzle(currentPuzzle.splitAnswer, currentPuzzle.secondLine);
    domUpdates.setCategoryText(currentPuzzle.category);
  }

  createPlayers(array) {
    this.players = array.map(person => {
      return person = new Player(person);
    });
    domUpdates.hiddenBoard(this.players);
  }


}
export default Game;
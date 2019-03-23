// import Wheel from "./Wheel.js";
import Round from "./Round.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import data from "./data.js";
import domUpdates from "./domUpdates.js";

class Game {
  constructor() {
    this.round = null;
    this.roundCount  = 0;
    this.players = [];
    this.currentPlayer = 0;
    this.allData = []

  }

  startGame() {
    this.createPlayers(domUpdates.playerNames());
    this.getRandomData();
    this.createRound()
  }

  getRandomData () {
    let puzzlesArr = Object.keys(data.puzzles)
    puzzlesArr.forEach(puzzleCat =>{
      this.allData.push(data.puzzles[puzzleCat].puzzle_bank)
    })
    console.log(this.allData)
  }

  createRound () {
    this.roundCount++;
    if (this.roundCount === 4) {
      // bonuswheel
    }
    let round = new Round(this.players);
    let currentPuzzle = round.getPuzzle(this.allData[this.roundCount]);
    // let currentPuzzle = round.getPuzzle(this.allData[this.roundCount - 1]);
    domUpdates.appendPuzzle(currentPuzzle, currentPuzzle.splitAnswer);
  }

  createPlayers(array) {
    this.players = array.map(person => {
      return person = new Player(person);

    });

    domUpdates.hiddenBoard(this.players);

  }


}
export default Game;
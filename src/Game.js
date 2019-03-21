// import Wheel from "./Wheel.js";
// import Round from "./Round.js";
// import Player from "./Player.js";
// import Puzzle from "./Puzzle.js";
import data from "./data.js";
import domUpdates from "./domUpdates.js";

class Game {
  constructor() {
    this.bank = [];
    this.round  = 0;
    this.players = [];
    this.currentPlayer = 0;
    this.allData = []

  }

  startGame(){
    console.log("hello");
    domUpdates.hiddenBoard();
    console.log("test")
    this.getRandomData();
  }

  getRandomData () {
    // bank
      console.log("data");
      console.log(data.puzzles.one_word_answers.puzzle_bank);
    
  }

  createRound (players) {
    this.roundCount++;
    if (this.roundCount === 1) {
      this.round = new Round(this.clueSet(), players);
    } else if (this.roundCount === 2) {
      this.round = new Round(this.clueSet(), players)
      this.round.sortClues();
    } else {
      }
  }
createPlayers(array) {
    this.round.players = array.map(person => {
      return person = new Player(person);
    });
  }

}

export default Game;
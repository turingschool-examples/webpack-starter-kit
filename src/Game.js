// import Wheel from "./Wheel.js";
import Round from "./Round.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import data from "./data.js";
import domUpdates from "./domUpdates.js";

class Game {
  constructor() {
    this.round  = 0;
    this.players = [];
    this.currentPlayer = 0;
    this.allData = []

  }

  startGame(){
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

  createRound (players) {
    this.round++;
    if (round === 4){
      // bonuswheel
    }
    this.round = new Round(players,this.allData[this.round-1]);
  }

  createPlayers(array) {
    this.players = array.map(person => {
      return person = new Player(person);

    });

      domUpdates.hiddenBoard(this.players);

  }


}
export default Game;
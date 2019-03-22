// import Wheel from "./Wheel.js";
import Round from "./Round.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
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
    this.getRandomData();
    this.createPlayers(domUpdates.playerNames());
    this.getRandomData();
  }

  getRandomData () {
    // data.puzzles.forEach(puzzleCat =>{
    //   allData.push(puzzleCat)
    // })
    // console.log(allData)
  }

  createRound (players) {
    this.round++;
    if (this.round === 1) {
      this.round = new Round(players);
      puzzle.puzzleSet(data.puzzles.one_word_answers);
    } else if (this.round=== 2) {
      this.round = new Round(players)
      puzzle.puzzleSet(data.puzzles.two_word_answers);
    } else if (this.round=== 3) {
      this.round = new Round(players)
      puzzle.puzzleSet(data.puzzles.three_word_answers);
  }   else{
    this.round = new Round(players)
    puzzle.puzzleSet(data.puzzles.four_word_answers);

  }
}

  createPlayers(array) {
    this.players = array.map(person => {
      return person = new Player(person);
    });

      domUpdates.hiddenBoard(this.players);

  }


}
export default Game;
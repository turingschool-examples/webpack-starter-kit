// import Wheel from "./Wheel.js";
import Game from "./Game.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";

class Round {
  constructor(players, puzzleBank) {
    this.players = players;
    this.puzzleBank = [];


  }

  puzzleSet(array){
    this.puzzleBank = array;
    let randomNum = Math.floor(Math.random() * array.length);
    let randomPuzzle = array.splice(randomNum, 1);
    let puzzle = new Puzzle(randomPuzzle[0]);
    console.log(puzzle)
  }

  
}

export default Round;
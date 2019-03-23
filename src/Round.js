// import Wheel from "./Wheel.js";
import Game from "./Game.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";

class Round {
  constructor(players) {
    this.players = players;
  }

  getPuzzle(array){
    let randomNum = Math.floor(Math.random() * array.length);
    let randomPuzzle = array.splice(randomNum, 1);
    let puzzle = new Puzzle(randomPuzzle[0]);
    console.log(puzzle.correctAnswer);
    return puzzle;
  }

  
}

export default Round;
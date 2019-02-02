import domUpdates from './domUpdates.js';
import data from './data.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import $ from 'jquery';

class Game {
  constructor() {
    this.puzzles = [];
    this.wheels = [];
    this.players = [];
  }

  startGame() {
    let $names = domUpdates.getNames();
    let $puzzles = this.findPuzzles();
    domUpdates.displayNames($names);
    this.createPlayers($names);
    this.createPuzzles($puzzles);
  }

  createPlayers($names) {
    let player1 = new Player($names[0]);
    let player2 = new Player($names[1]);
    let player3 = new Player($names[2]);
    this.players = [player1, player2, player3];
  };

  createPuzzles($puzzles) {
    let puzzle1 = new Puzzle($puzzles[0]);
    let puzzle2 = new Puzzle($puzzles[1]);
    let puzzle3 = new Puzzle($puzzles[2]);
    let puzzle4 = new Puzzle($puzzles[3]);
    this.puzzles = [puzzle1, puzzle2, puzzle3, puzzle4];
    console.log(this.puzzles);
  };

  findPuzzles() {
    const puzzleKeys = Object.keys(data.puzzles);
    const foundPuzzles = [];
    puzzleKeys.forEach(key => {
      const length = data.puzzles[key].puzzle_bank.length;
      const randomIndexNumber = Math.floor(Math.random() * Math.floor(length));
      const randomPuzzle = data.puzzles[key].puzzle_bank[randomIndexNumber];
      foundPuzzles.push(randomPuzzle);
    });
    return foundPuzzles;
  };

  spin() {

  }

  solve() {

  }

  buyVowel() {

  }

  guessLetter() {

  }

  // 
}
export default Game; 
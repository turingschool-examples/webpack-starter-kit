import domUpdates from './domUpdates.js';
import data from './data.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';
// import $ from 'jquery';

class Game {
  constructor() {
    this.puzzles = [];
    this.wheels = [];
    this.players = [];
  }

  startGame() {
    domUpdates.hideStartScreen();
    let names = domUpdates.getNames();
    let puzzles = this.findPuzzles();
    let wheels = this.collectWheels();
    domUpdates.displayNames(names);
    this.createPlayers(names);
    this.createPuzzles(puzzles);
    this.createWheels(wheels);
    domUpdates.changePuzzle();
  }

  startRound() {
    this.trackPlayerTurn();

  }

  createPlayers(names) {
    let player1 = new Player(names[0]);
    let player2 = new Player(names[1]);
    let player3 = new Player(names[2]);
    this.players = [player1, player2, player3];
  }

  createPuzzles(puzzles) {
    let puzzle1 = new Puzzle(puzzles[0]);
    let puzzle2 = new Puzzle(puzzles[1]);
    let puzzle3 = new Puzzle(puzzles[2]);
    let puzzle4 = new Puzzle(puzzles[3]);
    this.puzzles = [puzzle1, puzzle2, puzzle3, puzzle4];
  }

  createWheels(wheels) {
    let wheel1 = new Wheel(wheels[0]);
    let wheel2 = new Wheel(wheels[1]);
    let wheel3 = new Wheel(wheels[2]);
    let wheel4 = new Wheel(wheels[3]);
    this.wheels = [wheel1, wheel2, wheel3, wheel4];
  }

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
  }

  collectWheels() {
    const allWheels = [];
    for (var i = 0; i < 4; i++) {
      allWheels.push(this.findWheels());
    }
    return allWheels;
  }

  findWheels() {
    const wheelLength = data.wheel.length;
    const randomIndices = [];
    for (var i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * Math.floor(wheelLength));
      randomIndices.push(randomIndex);
    }
    const randomWheel = [];
    randomIndices.forEach(index => {
      const randomWheelResult = data.wheel[index];
      randomWheel.push(randomWheelResult);
    })
    return randomWheel;

  }

  trackPlayerTurn() {
    let player = this.players.shift();
    this.players.push(player);
    this.players[0].turn = false;
    this.players[1].turn = false;
    this.players[2].turn = true;
    this.currentPlayer();
  }

  previousPlayer() {
    domUpdates.unhighlightCurrentPlayer(this.players[0].name);
  }

  currentPlayer() {
    let curPlayer = this.players[2].name; 
    console.log(curPlayer);
    domUpdates.highlightCurrentPlayer(this.players[2].name);
  }


}
export default Game; 
import domUpdates from './domUpdates.js';
import Player from './Player.js';
import data from './data.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Game {
  constructor(player) {
    this.allPuzzles = [];
    this.players = [];
    this.currentPlayer = player;
    this.currentRound = 0;
    this.currentPuzzle = null;
    this.currentPrize = 0;
    this.wheel = null;
  }

  getPrize() {
    let wheel = new Wheel();
    this.currentPrize = wheel.getRandomWheel();
    this.wheel = wheel;
    console.log('prize!', this.currentPrize);
  } 

  beginGame() {
    this.getRandomPuzzle();
    let puzzle1 = new Puzzle(this.currentPuzzle);
    this.currentPuzzle = puzzle1;
  }

  getRandomPuzzle() {
    let keys = Object.keys(data.puzzles);
    keys.forEach((puzzleCat) => {
      let bankLength = data.puzzles[puzzleCat].puzzle_bank.length;
      let randomIndex = Math.floor(Math.random() * Math.floor(bankLength));
      let randomPuzz = data.puzzles[puzzleCat].puzzle_bank[randomIndex];
      this.allPuzzles.push(randomPuzz);
    });
    const currentPuzzle = this.allPuzzles.pop();
    this.currentPuzzle = currentPuzzle;
  }

  createPlayer(name1, name2, name3) {
    const player1 = new Player(name1);
    const player2 = new Player(name2);
    const player3 = new Player(name3);
    if (this.players.length <= 3) {
      this.players.push(player1, player2, player3);
    }
    domUpdates.displayName();
  }

  setCurrentPlayer() {
    this.currentPlayer = this.players[0];
  }

  switchPlayers() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
    } else if (this.currentPlayer === this.players[1]) {
      this.currentPlayer = this.players[2];
    } else if (this.currentPlayer === this.players[2]) {
      this.currentPlayer = this.players[0];
    }
    domUpdates.changeActivePlayer();
  }

  // getRound() {

  // }

  // getWinner() {
    
  // }
}

export default Game;
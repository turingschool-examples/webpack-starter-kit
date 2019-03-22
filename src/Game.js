import domUpdates from './domUpdates.js';
import Player from './Player.js';
import data from './data.js';
import Puzzle from './Puzzle.js';

class Game {
  constructor(players, rounds, currentPlayer) {
    this.allPuzzles = [];
    this.players = [];
    this.rounds = [];
    this.currentPlayer = 0;
    this.categories = []; 
  }

   beginGame() {
    this.getRandomPuzzle();
  }

  getRandomPuzzle() {
    console.log(data.puzzles)
    let keys = Object.keys(data.puzzles);
    keys.forEach((puzzleCat) => {
      this.allPuzzles.push(data.puzzles[puzzleCat].puzzle_bank)
    });
    for (let i = this.allPuzzles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.allPuzzles[i], this.allPuzzles[j]] = 
      [this.allPuzzles[j], this.allPuzzles[i]];
    }
  }

  createPlayer(name1, name2, name3) {
    const player1 = new Player(name1);
    const player2 = new Player(name2);
    const player3 = new Player(name3);

    if(this.players.length <= 3) {
      this.players.push(player1, player2, player3);
    }
    domUpdates.displayName();
  }

  getRound() {

  }

  getWinner() {
    
  }
}

export default Game;
import domUpdates from './domUpdates.js';
import Player from './Player.js';
import data from './data.js';
import Puzzle from './Puzzle.js';

class Game {
  constructor(player) {
    this.allPuzzles = [];
    this.players = [];
    this.rounds = [1, 2, 3, 4, 5];
    this.currentPlayer = player;
    this.categories = []; 
  }

  beginGame() {
    this.getRandomPuzzle();
  }

  createPuzzleBank(allPuzzles) {
    let puzzle1 = new Puzzle(allPuzzles[0]);
    let puzzle2 = new Puzzle(allPuzzles[1]);
    let puzzle3 = new Puzzle(allPuzzles[2]);
    let puzzle4 = new Puzzle(allPuzzles[3]);
    this.allPuzzles = [puzzle1, puzzle2, puzzle3, puzzle4];
  }

  getRandomPuzzle() {
    let keys = Object.keys(data.puzzles);
    keys.forEach((puzzleCat) => {
      this.allPuzzles.push(data.puzzles[puzzleCat].puzzle_bank)
    });
   
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
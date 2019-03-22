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
    this.cleanData();
    // this.getRandomCategories(game);
  }

  getRandomPuzzle() {
    let keys = Object.keys(data.puzzles);
    keys.forEach((puzzleCat) => {
    this.allPuzzles.push(data.puzzles[puzzleCat].puzzle_bank)
});
  }

  //  getRandomCategories(game) {
  //   console.log('getRandomCategories');
  //   console.log(game.categories);
  //   // for(let i = this.categories.length - 1; i>0; i--) {
  //   //   const j = Math.floor(Math.random() * (i + 1));
  //   //   [this.categories[i], this.categories[j]] = 
  //   //   [this.categories[j], this.categories[i]];
  //   // }
  // }

  cleanData(puzzle) {
    let newDataVals = Object.values(data);
    newDataVals.shift();
    this.categories = Object.keys(data).shift();
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
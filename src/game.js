import dataSet from './dataSet.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.players = []; 
    this.round = {}; 
    this.categoryData = [ 1, 3, 2, 4, 6, 5, 7, 8, 10, 9 ];
  }
  startGame() {
    const categoryIds = this.categoryData.slice(0, 4)
    const round = new Round(categoryIds);
    this.round = round

    round.setCategoryIds();
  }
  // grabData() {
  //   this.ogData = dataSet.clues;
  // }
  createPlayers(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    });
    this.players = players;
    domUpdates.renderNames(this.players);
  }
  // readyGameBoard() {
  //   domUpdates.renderNames(this.players);
  //   // updates categories
  //   // updates scores
  //   // rounds.....
  //   // everything displayed on board
  // }
  
  changeRound() {
    //increment round
  }
  resetGame() {
    //this.round = 1
  }
}

export default Game;
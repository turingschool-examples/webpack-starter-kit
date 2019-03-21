import Player from './Player.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.players = []; 
    this.round = 1; 
  }
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
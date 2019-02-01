import domUpdates from "./domUpdates";
import Player from './Player.js';

class Game {
  constructor() {
    this.players = [];
    // this.clues = gatherClues;
    this.currentPlayer = null;
    this.winner = null;
  }

  gatherPlayers(a, b, c) {
    let player1 = new Player(0, a);
    let player2 = new Player(0, b);
    let player3 = new Player(0, c);
    this.players.push(player1, player2, player3);
    this.currentPlayer = this.players[0];
  }
  
  // gatherClues() {

  // }

  // playersTurn() {

  // }

  quitGame() {
    domUpdates.toggleSplash();
  }

  // determineWinner() {

  // }

}

export default Game;
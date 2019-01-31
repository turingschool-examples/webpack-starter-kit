import domUpdates from "./domUpdates";

class Game {
  constructor() {
    this.players = [];
    // this.clues = gatherClues;
    this.currentPlayer = null;
    this.winner = null;
  }

  gatherPlayers(a, b, c) {
    this.players.push(a, b, c);
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
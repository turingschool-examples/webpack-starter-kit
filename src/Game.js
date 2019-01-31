import domUpdates from "./domUpdates";

class Game {
  constructor() {
    this.players = [];
    // this.clues = gatherClues;
    this.currentPlayer = null;
    this.winner = null;
  }

  gatherPlayers(one, two, three) {
    this.players.push(one, two, three);
    this.currentPlayer = this.players[0];
    domUpdates.displayPlayers(this.players);
  }

  // gatherClues() {

  // }

  // playersTurn() {

  // }

  // quitGame() {

  // }

  // determineWinner() {

  // }

}

export default Game;
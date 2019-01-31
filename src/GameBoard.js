class Gameboard {
  constructor(round, players, activeRound, activePlayer, cluesRemaining, clues) {
    this.rounds = [];
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = false;
    this.cluesRemaining = 16;
    this.clues = [];
  }
  changeRound() {
    if (this.cluesRemaining === 0) {
      this.activeRound++;
    }
  }
  
  startGame() {
    // push player names into players array
    this.players.length === 3;
  }

  changeTurn(players) {
    // increment turn
    // reset index of player, if on p3, reset to p1
    // on round end, reset active player. if p3, reset to p1
  }
}

export default Gameboard;
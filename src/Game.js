class Game {
  constructor(players, rounds, currentPlayer) {
    this.players = [];
    this.rounds = [];
    this.currentPlayer = 0;
  }

  getWinner() {
    
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

  beginGame() {
    
  }
}

export default Game;
import Round from '../src/Round'
import Player from './Player';
import domUpdates from './domUpdates';
class Game {
  constructor(name1, name2) {
    this.players = this.newPlayers(name1, name2)
    this.currentRound = 1;
    this.round = new Round(1, 1)
  }

  newPlayers (name1, name2) {
    let bothPlayers = []
    let player1 = new Player(1, name1)
    let player2 = new Player(2, name2)
    bothPlayers.push(player1, player2)
    return bothPlayers
  }

  newRound(round, currentPlayer) {
    let that = this;
    setTimeout(() => {
      domUpdates.showBoard(that, currentPlayer)
    }, 2000);
    return this.round = new Round(round, currentPlayer)
  }
}

export default Game;
import Round from '../src/Round'
import Player from './Player';

class Game {
  constructor(name1, name2) {
    this.players = this.newPlayers(name1, name2)
    this.round = new Round()
  }
  newPlayers (name1, name2) {
    let bothPlayers = []
    let player1 = new Player(1, name1)
    let player2 = new Player(2, name2)
    bothPlayers.push(player1, player2)
    return bothPlayers
  }
}

export default Game;
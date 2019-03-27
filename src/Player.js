import Game from './Game.js'
import Clue from './Clue.js'

class Player {
  constructor(playerName, playerId) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.playerDollarAmount = 0;
  }
}

export default Player;

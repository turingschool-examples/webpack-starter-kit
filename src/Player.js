import Game from './Game.js'

class Player {
  constructor(playerName, playerId) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.playerDollarAmount = 0;
  }
  updateScore(newScore) {
    this.playerDollarAmount = newScore;
  }
}

export default Player;

import Game from './Game.js'
import Clue from './Clue.js'

class Player {
  constructor(playerName, playerId) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.playerDollarAmount = 0;
    this.playerAnswer = ""
  }
  checkAnswer(clue, player) {
    if (this.playerAnswer.toLowerCase() === clue.answer.toLowerCase()) {
      this.playerDollarAmount += clue.pointValue;
    } else {
      (this.playerDollarAmount -= clue.pointValue);
    }
  }
}

export default Player;

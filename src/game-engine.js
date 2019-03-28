
import Round from './round';
import Player from './player';
import BonusRound from './bonus-round'


class GameEngine {
  constructor(playersNames) {
    this.playersNames = playersNames || [],
    this.players = [],
    this.currentRound = new Round(0);
    this.bonus = null
  }
  revEngine(game) {
    this.loadPlayers();
    this.currentRound.newRound(game);
    // this.currentRound.getCurrentPlayer(game);
  }
  loadPlayers() {
    this.players = this.playersNames.map((player, ind) => {
      return this.players[ind] = new Player(player, (ind + 1));
    });
  }
  bonusRound (rndNum) {
    this.bonus = new BonusRound(rndNum);
    console.log(this.bonus)
  }
}

export default GameEngine;
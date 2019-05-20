import Round from './Round';

class Game {
  constructor(surveys) {
    this.surveys = surveys;
    this.round = 0;
  }

  updateRound() {
    let round = new Round(this.surveys[0]);
    this.round++;
    if (round > 2) {
      this.startLightningRound()
    }
  }

  startLightningRound() {
    let lightningRound = new lightningRound();
  }

}


export default Game;
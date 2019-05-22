import domUpdates from './domUpdates';
import Round from './Round';
import data from '../data/surveys';

class Game {
  constructor(data, user1, user2) {
    this.data = data;
    this.users = [user1, user2];
    this.round = 0;

  }



  updateRound() {
    this.round++;
    if (this.round > 2) {
      let lightningRound = new lightningRound();
    }else {
      let round = new Round(this.surveys[0], this);
      this.surveys.shift()
    }
  }




}


export default Game;
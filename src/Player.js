import domUpdates from './domUpdates';

class Player {

  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  updateScore(amount) {
    this.score += amount;
    domUpdates.updateScores(this);
  } 

}

export default Player;
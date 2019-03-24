import domUpdates from './domUpdates';

class Player {

  constructor(name, number) {
    this.name = name;
    this.number = number;
    this.score = 0;
  }

  updateScore(amount) {
    this.score += amount;
    domUpdates.updateScores(this);
  } 

}

export default Player;
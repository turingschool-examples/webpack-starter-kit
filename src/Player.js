import Clue from './Clue.js';

class Player {
  constructor(score, name) {
    this.score = score;
    this.name = name;
    // this.turn = turn;
  }

  changeScore(points) {
    this.score += points;
    console.log(this.score)
  }


}

export default Player;
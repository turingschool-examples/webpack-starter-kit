import domUpdates from "./domUpdates";

class Player {
  constructor(name, answer) {
    this.name = name;
    this.answer = answer;
    this.currentScore = 0;
    this.totalScore = 0;
  }
}

export default Player;
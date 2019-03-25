import domUpdates from "./domUpdates";

class Player {
  constructor(name, answer) {
    this.name = name;
    this.answer = answer;
    this.currentScore = 0;
    this.totalScore = 0;
  }

  addScore(wheel) {
    this.currentScore += wheel.currentValue;
  }

  subtractScore(wheel) {
    console.log(this.currentScore)
    // this.currentScore -= wheel.currentValue;
  }
}

export default Player;
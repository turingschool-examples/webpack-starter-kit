import domUpdates from "./domUpdates";

class Player {
  constructor(name, answer) {
    this.name = name;
    this.answer = answer;
    this.currentScore = 0;
    this.totalScore = 1000;
  }

  addScore(prize) {
    this.currentScore += prize;
  }

  buyVowel() {
    console.log(this.currentScore)
    this.totalScore = this.currentScore - 100;
  }
}

export default Player;
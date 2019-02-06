import domUpdates from "./domUpdates";

class Question {
  constructor(question, answer, score) {
    this.question = question;
    this.answer = answer;
    this.score = score;
  }

  scorePoints() {
    // for chosen clue value,
      // if ans is correct
        // add point vavlue to current players score
        // this.pointValue += this.player.score
      // if ans is incorrect
        // subtract value from current score
        // this.pointValue -= this.player.score
  }
}

export default Question;
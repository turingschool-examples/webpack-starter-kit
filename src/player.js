class Player {
  constructor(name, score, wager) {
    this.name = name;
    this.score = score;
  }

  updateScore(resultScore) {
    this.score += resultScore;
  }

  wagerRange() {
  }
}


export default Player;

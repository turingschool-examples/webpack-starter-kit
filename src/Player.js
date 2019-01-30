class Player {
  constructor(name, activePlayer, roundScore, totalScore) {
    this.name = name;
    this.activePlayer = false;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }
}

export default Player;
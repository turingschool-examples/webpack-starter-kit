class Player {
  constructor(name, activePlayer = false, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.activePlayer = activePlayer;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }
}

export default Player;
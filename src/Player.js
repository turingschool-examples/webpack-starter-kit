class Player {
  constructor(name, playerNum) {
    this.name = name;
    this.playerNumber = playerNum;
    this.totalScore = 0;
    this._roundScore = 0;
  }
  get roundScore() {
    return this._roundScore;
  }
  set roundScore(newScore) {
    this._roundScore = newScore;
  }
  //validate answer
  //update points
}

export default Player;
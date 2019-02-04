class Player {
  constructor(name, active = false, playerNumber, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.active = active;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
    this.playerNumber = playerNumber
  }


  incrementRoundScore(turnValue) {
    let roundScore = this.roundScore += turnValue;
    return roundScore;
  }

}

export default Player;
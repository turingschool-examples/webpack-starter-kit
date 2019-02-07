class Player {
  constructor(name, active = false, playerNumber, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.active = active;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
    this.playerNumber = playerNumber
  }


  incrementRoundScore(turnValue) {
    let roundScore;
    if (Number.isInteger(turnValue)) {
      roundScore = this.roundScore += turnValue;
    } else {
      roundScore = this.roundScore += 0
    }
    return roundScore;
  }

}

export default Player;
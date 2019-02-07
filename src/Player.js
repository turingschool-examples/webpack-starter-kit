class Player {
  constructor(name, playerNumber, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
    this.playerNumber = playerNumber
  }


  incrementRoundScore(currentValue) {
    let roundScore;
    if (Number.isInteger(currentValue)) {
      roundScore = this.roundScore += currentValue;
    } else {
      roundScore = this.roundScore += 0
    }
    return roundScore;
  }

}

export default Player;
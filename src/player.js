class Player {
  constructor(name, score, wager, playerNum) {
    this.name = name;
    this.score = score;
  }

  updateScore(resultScore) {
    this.score += resultScore;
  }

  wagerRange() {
    //Minimum is 5, Max is the highest of either players current score or highest available clue value
  }
}


export default Player;

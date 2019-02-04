class Player {
  constructor(name, score, wager, playerNum, active){
    this.name = name;
    this.score = score;
    this.wager = wager;
    this.playerNum = playerNum;
    this.active = active;
  };

  updateScore(resultScore) {
    this.score += resultScore;
  };

  wagerRange() {
    //Minimum is 5, Max is the highest of either players current score or highest available clue value
  };
}


export default Player;

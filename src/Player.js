class Player {

  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  getName() {
    return this.name;
  }

  updateScore(amount) {
    this.score += amount;
  }

}

export default Player;
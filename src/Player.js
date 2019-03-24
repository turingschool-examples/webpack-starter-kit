class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    // this.iD = 0;
  }

  changeScore() {
    this.score++
  }
}

export default Player;
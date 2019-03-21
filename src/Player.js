class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  changeScore() {
    this.score++
  }
}

export default Player;
class Player {

  constructor(name, number) {
    this.name = name;
    this.number = number;
    this.score = 0;
  }

  updateScore(amount) {
    this.score += amount;
  } 

}

export default Player;
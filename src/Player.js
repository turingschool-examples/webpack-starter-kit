class Player {

  constructor(name, number) {
    this.name = name;
    this.number = number;
    this.score = 0;
  }

  updateScore(amount) {
    this.score += amount;
    console.log(this.name, this.score);
  } 

}

export default Player;
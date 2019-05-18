class User {
  constructor(name, player = playerOne) {
    this.name = name;
    this.score = 0;
    this.player = player;
  }

  updateScore() {
    this.score += answers.respondents;
    //DOM update display score
  }

  //DOM update name 

}

export default User;


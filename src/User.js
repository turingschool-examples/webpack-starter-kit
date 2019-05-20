import domUpdates from './domUpdates';

class User {
  constructor(name, player = 'playerOne') {
    this.name = name;
    this.score = 0;
    this.player = player;
  }

  updateScore(score) {
    this.score += 100;
    domUpdates.displayScore(score)
  }

  //DOM update name 

}

export default User;


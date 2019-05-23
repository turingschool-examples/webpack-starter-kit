import domUpdates from './domUpdates';
import Game from './Game';
import Round from './Round';

class User {
  constructor(name, player = 'playerOne') {
    this.name = name;
    this.score = 0;
    this.player = player;
  }

  updateScore(amount) {
    this.score += amount;
  }

  //DOM update name 

}

export default User;


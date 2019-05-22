import domUpdates from './domUpdates';
class Player {
  constructor(id, name, guess) {
    this.id = id;
    this.name =  name;
    this.score = 0;
    this.guess = guess;
  }
}

export default Player;
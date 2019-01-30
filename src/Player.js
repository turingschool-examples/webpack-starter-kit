import domUpdates from './domUpdates.js';

class Player {
  constructor(name, round = 0, total = 0) {
    this.name = name;
    this.round = round;
    this.total = total;
  }
}

export default Player;
import domUpdates from './domUpdates.js'

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    // this.iD = 0;
  }

  increaseScore() {
    this.score += event.target.innerText;
    $('#player-1-points').text(event.target.innerText);
  }

  decreaseScore() {
    console.log('text')

  }
}

export default Player;
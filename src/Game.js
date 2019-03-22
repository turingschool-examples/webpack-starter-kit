import Player from './Player.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.players = [];
  }

  updateName(names) {
    console.log('Game Test functional')
    const player = new Player;
    console.log(names);
    names.map(name => {
      let player = new Player(name);
    })
    // names.map
    domUpdates.updateNames();
    // this.players = players;
    // domUpdates.renderNames(this.players);
  }

  generateRandomNum() {
    //generate random numbner
    //pull it
    //then take it out of array
  }
}

export default Game;
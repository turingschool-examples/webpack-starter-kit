import Player from './Player.js';
import domUpdates from './domUpdates.js';
import data from './data-set.js';
// import 

class Game {
  constructor() {
    this.players = [];
    this.categories = [];
  }

  createPlayers(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    })
    this.players = players;
    domUpdates.updateNames(this.players);
  }

  // udpateCategories() {
  //   console.log('update categories working');
  //   // console.log(Data);
  // }
    // const player = new Player;
    // console.log(names);
    // const players = names.map(name => {
      // let newplayer = new Player(name);
      // return newPlayer;
    // })
    // names.map
    // domUpdates.updateNames();
    // this.players = players;
    // domUpdates.renderNames(this.players);
  // }

  generateRandomNum() {
    //generate random numbner
    //pull it
    //then take it out of array
  }
}

export default Game;
import Player from './Player.js'
import domUpdates from './domUpdates.js';
import Round from './Round.js';

class Game{
  constructor(round =1, players =[]){
    this.round = round;
    this.players = players;

  }

  start(array){
    const round = new Round();
    this.round = round;
    // array.forEach(person => this.players.push(person);
    // playerArray = domUpdates.grabNames();
    // console.log(domUpdates.grabNames())
    this.createPlayers(array);
  }

  createPlayers(array){
      this.players = array.map(person => {
       return person = new Player(person);
      });
  }
}

export default Game;
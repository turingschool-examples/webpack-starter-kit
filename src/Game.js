import Player from './Player.js'
import domUpdates from './domUpdates.js';
import Round from './Round.js';

class Game{
  constructor(round =1, players =[]){
    this.round = round;
    this.players = players;
  }

  start(){
    const round = new Round();
    this.round = round;
    this.createPlayers(domUpdates.grabNames());
  }

  createPlayers(array){
    if (typeof array === 'object') {
      this.players = array.map(person => {
       return person = new Player(person);
      });
    }
  }
}

export default Game;
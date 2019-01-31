import Player from './Player.js'
import domUpdates from './domUpdates.js';

class Game{
  constructor(round =1, players =[]){
    this.round = round;
    this.players = players;
  }

  start(){
    // array.forEach(person => this.players.push(person);
    playerArray = domUpdates.grabNames();
    this.createPlayers(playerArray);
  }

  createPlayers(array){
      this.players = array.map(person => {
       return person = new Player(person);
      });
  }
}

export default Game;
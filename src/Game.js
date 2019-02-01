import Player from './Player.js'
import domUpdates from './domUpdates.js';
import Round from './Round.js';

class Game{
  constructor(round =1, players =[]){
    this.round = round;
    this.players = players;
    // clues for entire game
    // round1 clues
    // round2 clues
    //round3 clue
  }

  start(){
    const round = new Round();
    this.round = round;
    this.round.getClues()
    this.createPlayers(domUpdates.grabNames());
  }

  createPlayers(array){
      this.players = array.map(person => {
       return person = new Player(person);
      });
  }
}

export default Game;
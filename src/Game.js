import Player from './Player.js'

class Game{
  constructor(round =1, players =[]){
    this.round = round;
    this.players = players;
  }

  start(array){
    // array.forEach(person => this.players.push(person);
  
    this.createPlayers(array);
  }

  createPlayers(array){
      this.players = array.map(person => {
       return person = new Player(person);
      });
      console.log(this.players)
  }
}

export default Game;
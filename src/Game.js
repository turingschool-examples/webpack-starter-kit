

class Game{
  constructor(round =1, players =[]){
    this.round = round;
    this.players = players;
  }

  start(array){
    // array.forEach(person => this.players.push(person);
    this.players = array;
    createPlayers(this.players);
  }

  createPlayers(array){
      array.forEach((person,ind) => {
        const `player${ind + 1}` = new Player()
      })

  }
}

export default Game;
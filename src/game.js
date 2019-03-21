class Game {
  constructor() {
    this.players = []; 
    this.round = 1; 
  }
  createPlayers() {
    //take names from input values
    //push into array?
    names.map(name => {
    let newPlayer = new Player(name);
    return newPlayer;
  });
  }
  changeRound() {
    //increment round
  }
  resetGame() {
    //this.round = 1
  }
}

export default Game;
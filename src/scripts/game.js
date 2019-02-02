import Player from './player.js'
class Game {
    constructor() {
        this.round = 1;
        this.players = {};
        this.wheel = [];
        this.puzzleBank = [];
    }

    startGame(){
    }

    createPlayers(playerNames){
      playerNames.forEach((name) => {
       this.players[name] = new Player(name)    
      })
      console.log(this.players)
    }
}
export default Game;

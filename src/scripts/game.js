import domUpdates from './domUpdates.js'

class Game {
    constructor() {
        this.round = 1;
        this.players = [];
        this.wheel = [];
        this.puzzleBank = [];
    }

    startGame(){
      domUpdates.displayPlayerNames();
    }
}
export default Game;

import dataSet from './dataSet.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.categoryData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    this.clues = []
    this.players = []; 
    this.round = {}; 
    this.currentPlayer = -1;
  }
  startGame() {
    this.clues = this.shuffle(dataSet.clues)
    this.categoryData = this.shuffle(this.categoryData)
    this.createRound();
    console.log(this.players[0])
  }
  createPlayers(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    });
    console.log(players[2]);
    this.players = players;
    domUpdates.renderNames(this.players);
  }
  createRound() {
    const round = new Round(this.categoryData.splice(0, 4), this.clues); // two different arguments this.category... and this. clues are being passed as params into Round constructor(ids, clues)
    round.renderCategories()
    this.round = round
  }
  shuffle(clues) {
    return clues.sort(() => 0.5 - Math.random());
  }
  changeRound() {
    //increment round
  }
  changePlayer() {
    this.currentPlayer++;
    if (this.currentPlayer === 3) {
      this.currentPlayer = 0;
    }
    // } else if (this.currentPlayer = player)fgegea
    console.log('current player', this.players[this.currentPlayer]);
  }
}

export default Game;
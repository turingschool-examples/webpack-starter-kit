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
  }
  startGame() {
    this.clues = this.shuffle(dataSet.clues)
    this.categoryData = this.shuffle(this.categoryData)
    this.createRound();
  }
  createPlayers(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    });
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
}

export default Game;
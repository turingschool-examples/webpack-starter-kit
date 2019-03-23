import Player from './Player.js';
import domUpdates from './domUpdates.js';
import data from './data-set.js';
import Round from './Round.js';

class Game {
  constructor() {
    this.players = [];
    // this.roundOne = [];
    this.categories = [];
  }

  createPlayers(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    })
    this.players = players;
    domUpdates.updateNames(this.players);
  }

  startRound() {
    const categoryIds = this.shuffle(Object.values(data.categories));

    const roundOne = new Round;
    roundOne.categoryIds = categoryIds.splice(0, 4);
    roundOne.populateCategories();
    domUpdates.updateCategories(roundOne.categoryNames);
    roundOne.populateClues();

  }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }

}

export default Game;
import dataSet from './dataSet.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.categoryData = [];
    this.players = []; 
    this.round = {}; 
  }
  startGame() {
    this.createRound();
    // const categoryIds = this.categoryData.slice(0, 4)
    // const round = new Round(categoryIds);
    // this.round = round
    // round.setCategoryIds();
    // this.grabData();

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
    const round = new Round;
    const categoryIds = this.shuffle(Object.values(dataSet.categories));
    round.categoryIds = categoryIds.slice(0, 4);
    // console.log(round.categoryIds);
    round.generateCategories();
    domUpdates.renderCategories(round.categoryNames);
  }

  shuffle(toSort) {
    return toSort.sort(() => 0.5 - Math.random());
  }

  // readyGameBoard() {
  //   domUpdates.renderNames(this.players);
  //   // updates categories
  //   // updates scores
  //   // rounds.....
  //   // everything displayed on board
  // }
  
  changeRound() {
    //increment round
  }
  resetGame() {
    //this.round = 1
  }
}

export default Game;
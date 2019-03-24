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
    // const categoryIds = this.categoryData.slice(0, 4)
    // const round = new Round(categoryIds);
    // this.round = round
    // round.setCategoryIds();
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
    const round = new Round(this.categoryData.slice(0, 4), this.clues);
    round.renderCategories()
    this.round = round
    // const categoryIds = this.shuffle(Object.values(dataSet.categories));
    // round.categoryIds = categoryIds.slice(0, 4);
    // round.generateCategories();
    // round.generateClues();
    // console.log("clues", round.clues);
    // domUpdates.renderCategories(round.categoryNames);
  }


  shuffle(clues) {
    return clues.sort(() => 0.5 - Math.random());
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
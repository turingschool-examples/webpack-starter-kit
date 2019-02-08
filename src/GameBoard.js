import data from "./data"
import domUpdates from './domUpdates';
import Round from './Round'
import Player from './Players.js'

class Gameboard {
  constructor() {
    this.players = [];
    this.activeRound = null;
    this.activePlayer = 0;
    this.allRounds = [];
    this.cluesRemaining = 16;
    this.clues = [];
    this.catNames = [];
    this.roundOne = [];
    this.roundTwo = [];
    this.roundThree = [];
    this.playerIndex = 0;
  }

  createPlayers(playerIn) {
    this.players = playerIn.map(user => {
      return user = new Player(user);
    })
    this.activePlayer = this.players[0];
  }

  startGame(playerIn) {
    this.instRound();
    this.createPlayers(playerIn);
    domUpdates.changeCatTitles(this);
  }

  instRound() {
    const gameArr = this.shuffle(Object.values(data.categories));

    this.roundOne = new Round();
    this.roundOne.catIds = gameArr.splice(0, 4);
    this.roundOne.startRound(this);
    this.roundOne.getCatNames();


    this.roundTwo = new Round();
    this.roundTwo.catIds = gameArr.splice(0, 4);
    this.roundTwo.startRound(this);
    this.roundTwo.getCatNames();
    

    this.roundThree = new Round();
    this.roundThree.catIds = gameArr.splice(0, 1);
    this.roundThree.startRound(this);
    this.roundThree.getCatNames();

    this.allRounds.push(this.roundOne, this.roundTwo, this.roundThree);
    this.activeRound = this.allRounds[0];
  }

  changeRound() {
    if (this.cluesRemaining === 0) {
      this.activeRound = this.allRounds[1];
      this.cluesRemaining = 16;
      domUpdates.changeCatTitles(this);
    }
  }

  changeTurn() {
    this.playerIndex++;
    if (this.playerIndex === 3) {
      this.playerIndex = 0;
    }
    this.activePlayer = this.players[this.playerIndex];
    this.changeRound();
 }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  
}

export default Gameboard;
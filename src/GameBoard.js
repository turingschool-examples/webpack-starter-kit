import data from "./data"
import $ from 'jquery';
import domUpdates from './domUpdates';
import Round from './Round'
import Player from './Players.js'

class Gameboard {
  constructor() {
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = 0;
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

  hidePopup() {
    $(".start--button").click(function() {
      $(".overlay").toggle();
      $('.start-up').toggle();
    });
  }

  startGame(playerIn) {
    this.instRound();
    this.roundOne.startRound(this);
    this.roundOne.getCatNames();
    this.createPlayers(playerIn);
    domUpdates.changeCatTitles(this);
  }

  instRound() {
    const gameArr = this.shuffle(Object.values(data.categories));
    this.roundOne = new Round();
    this.roundOne.catIds = gameArr.splice(0, 4);
    this.roundTwo = new Round();
    this.roundOne.catIds = gameArr.splice(0, 4);
    this.roundThree = new Round();
    this.roundThree.catIds = gameArr.splice(0, 1);
  }

  changeRound() {
    this.cluesRemaining--;
    if (this.cluesRemaining === 0) {
      this.activeRound++;
    }
    domUpdates.changeCatTitles(this);
  }

  changeTurn() {
    this.playerIndex++;
    if (this.playerIndex === 3) {
      this.playerIndex = 0;
    }
    this.activePlayer = this.players[this.playerIndex];
  }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  
}

export default Gameboard;
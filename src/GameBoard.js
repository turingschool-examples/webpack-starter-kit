import data from "./data"
import $ from 'jquery';
import jQuery from 'jquery'
// window.$ = jQuery;

import domUpdates from "./domUpdates";
import Round from './Round'
import Player from './Players.js'

class Gameboard {
  constructor(players, activeRound, activePlayer, cluesRemaining, clues, catNames) {
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = 0;
    this.cluesRemaining = 16;
    this.clues = [];
    this.catNames = [];
    this.roundOne = [];
    this.roundTwo = [];
    this.roundThree = [];
  }

  createPlayers(playerIn) {
    this.players = playerIn.concat(this.players);
    let player1 = new Player(this.players[0]);
    let player2 = new Player(this.players[1]);
    let player3 = new Player(this.players[2]);
    this.activePlayer = this.players[0];
  }

  hidePopup() {
    $(".start--button").click(function() {
      $(".overlay").toggle();
      $('.start-up').toggle();
    });
  }

  showQuestionPopup() {
    $('.col').click(function() {
      $('.question-container').css('visibility', 'visible')
    });
  }

  startGame(playerIn) {
    const gameArr = this.shuffle(Object.values(data.categories));
    // domUpdates.displayNames();

    this.roundOne = new Round();

    this.roundOne.catIds = gameArr.splice(0, 4);

    this.roundOne.startRound(this);
    this.roundOne.getCatNames();
    // round1.setCatNames();
    this.createPlayers(playerIn);
  }

  changeRound() {
    this.activeRound++;
  }

  changeTurn(players) {
    this.activePlayer++;
    if (this.activePlayer === 3) {
      this.activePlayer = 0;
    }
    return players[this.activePlayer];
  }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  
}

export default Gameboard;
import data from "./data"
// import $ from 'jquery';
// import jQuery from 'jquery'
// window.$ = jQuery;

import domUpdates from "./domUpdates";
import Round from './Round'
import Player from './Players.js'

class Gameboard {
  constructor(players, activeRound, activePlayer, cluesRemaining, clues, catNames) {
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = 1;
    this.cluesRemaining = 16;
    this.clues = [];
    this.catNames = [];
    this.roundOne = [];
    this.roundTwo = [];
    this.roundThree = [];
  }

  createPlayers() {
    // let names = domUpdates.getNames();
    let player1 = new Player()
    let player2 = new Player()
    let player3 = new Player()
    this.players = [player1, player2, player3]
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

  startGame() {
    const gameArr = this.shuffle(Object.values(data.categories));
    // domUpdates.displayNames();
    // createPlayers();
      this.roundOne = new Round();


      // this.roundOne = new Round();
      this.roundOne.catIds = gameArr.splice(0, 4);
      // const round2 = new Round;
      // round2.catIds = gameArr.splice(0, 4);
      // const round3 = new Round();
      // round3.catIds = gameArr.splice(0, 1);
      this.roundOne.startRound(this);
      this.roundOne.getCatNames();
  }

  changeRound() {
    this.activeRound++;
  }
  
  namePlayers() {
    // push player names into players array
    this.players.push($("$p1-name-js"), $("p2-name-js"), $("p3-name-js"));
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
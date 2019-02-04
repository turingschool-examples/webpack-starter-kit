import data from "./data"
import $ from 'jquery';
import jQuery from 'jquery'
window.$ = jQuery;

import domUpdates from "./domUpdates";
import Round from './Round'
// import Player from './Players.js'

class Gameboard {
  constructor(players, activeRound, activePlayer, cluesRemaining, clues, catNames) {
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = 1;
    this.cluesRemaining = 16;
    this.clues = [];
    this.catNames = [];
  }

  createPlayers() {
    // let names = domUpdates.getNames();
    // let player1 = new Player(names[0])
    // let player2 = new Player(names[1])
    // let player3 = new Player(names[2])
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
    /////////////////////////////////////////////////
//     let round1 = gameArr.splice(0, 4);
//     let round2 = gameArr.splice(0, 4);
//     let round3 = gameArr.splice(0, 1);
    // for (let i = 0; i > gameArr.length; i++) {
    //   if (data.clues.categoryId[i] === data.categories);
    // }
    ////////////////////////////////////////////////
      const round1 = new Round();
      round1.catIds = gameArr.splice(0, 4);
      const round2 = new Round;
      round2.catIds = gameArr.splice(0, 4);
      const round3 = new Round();
      round3.catIds = gameArr.splice(0, 1);
      round1.startRound(this);
      round1.getCatNames();
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
    if (this.activePlayer === this.players.length) {
      this.activePlayer = 0;
    }
    return players[this.activePlayer]
    // increment turn
    // reset index of player, if on p3, reset to p1
    // on round end, reset active player. if p3, reset to p1
  }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Gameboard;
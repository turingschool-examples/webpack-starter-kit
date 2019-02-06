import data from "./data"
import $ from 'jquery';
import jQuery from 'jquery'
// window.$ = jQuery;

import domUpdates from './domUpdates';
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

  setCatNames($cats) {
    console.log("get cats")
    // $.each(this.roundOne.catNames, function (index, value) {
    //   $($cats).text(this.roundOne.catNames[i]);
    // });
    // $('').each(function (index, value) {
    //   console.log('div' + index + ':' + $(this).attr('id'));
    // });
    // var names = this.roundOne.catNames;
    // $.each(names, function (index, value) {
    //   $cats[index] = `$('.` + index + `').text('` + value + `')`;
    //   // $cats[index] = value;
    // });
    console.log(names, $cats)
  }

  startGame(playerIn, $cats) {
    const gameArr = this.shuffle(Object.values(data.categories));
    // domUpdates.displayNames();

    this.roundOne = new Round();
    this.roundOne.catIds = gameArr.splice(0, 4);
    // this.roundTwo = new Round();
    // this.roundOne.catIds = gameArr.splice(0, 4);
    // this.roundThree = new Round();
    // this.roundThree.catIds = gameArr.splice(0, 1);
    this.roundOne.startRound(this);
    this.roundOne.getCatNames();
    // this.setCatNames($cats);
    this.createPlayers(playerIn);
    domUpdates.changeCatTitles(this);
  }

  changeRound() {
    this.cluesRemaining--;
    if (this.cluesRemaining === 0) {
      this.activeRound++;
    }
    domUpdates.changeCatTitles(this);
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
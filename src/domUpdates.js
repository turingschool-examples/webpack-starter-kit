import Game from './Game.js';
import Wheel from './Wheel.js';
import $ from 'jquery';

let domUpdates = {

// newGame() {

// },

  disableQuit() {
    $('.quit-button').prop('disabled', true);
  },

  displayName() {
    $('.box-name').each((i, name) => {
      $(name).text($('.player-name-input').eq(i).val());
    });
  },

  displayCategoryName(game) {
    $('.category').text(game.allPuzzles.category);
  },

// displayScore() {

// },

  startGame(game, wheel) {
    game.createPlayer($('.player-name-input').eq(0).val(), 
      $('.player-name-input').eq(1).val(), 
      $('.player-name-input').eq(2).val());
    game.beginGame(game);
    wheel.getRandomWheel();
  }

}

export default domUpdates;
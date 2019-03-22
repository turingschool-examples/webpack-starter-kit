import Game from './Game.js';
import $ from 'jquery';

let domUpdates = {

// newGame() {

// },

disableQuit() {
  $('.quit-button').prop('disabled', true);
},

resetGame() {
  location.reload(true);
},

displayName() {
  $('.box-name').each((i, name) => {
    $(name).text($('.player-name-input').eq(i).val());
  });
},

// displayScore() {

// },

startGame(game) {
  game.createPlayer($('.player-name-input').eq(0).val(), 
    $('.player-name-input').eq(1).val(), 
    $('.player-name-input').eq(2).val());
    game.beginGame(game);
}

}

export default domUpdates;
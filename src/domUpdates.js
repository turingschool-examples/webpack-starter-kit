import Game from './Game.js';
import $ from 'jquery';

let domUpdates = {

newGame() {

},

resetGame() {

},

displayName() {
  $('.box-name').each((i, name) => {
    $(name).text($('.player-name-input').eq(i).val());
  });
},

displayScore() {

}

}

export default domUpdates;
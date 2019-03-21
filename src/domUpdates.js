import Game from './Game.js';

let domUpdates = {

newGame() {

},

resetGame() {

},

displayName() {
  $('.box-name').each((i, name) => {
    $(name).text($('.player-name-input'));
  });
},

displayScore() {

}

}

export default domUpdates;
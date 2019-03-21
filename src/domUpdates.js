import Game from './Game.js';

let domUpdates = {

newGame() {

},

resetGame() {

},

displayName() {
  console.log('hi')
  $('.box-name').each((i, name) => {
    $(name).text($('.player-name-input').eq(i).val());
  });
},

displayScore() {

}

}

export default domUpdates;
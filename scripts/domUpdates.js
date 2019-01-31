import Player from './Player.js'

let domUpdates = {

  getPlayerInput() {
    console.log('got to get player')
   let player1 = new Player($('.js-player-one-input').val());
    new Player($('.js-player-two-input').val());
    new Player($('.js-player-three-input').val());
  }
}

export default domUpdates;
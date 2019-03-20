import $ from 'jquery';
import Game from './Game.js'

let domUpdates = {

    startGame (game) {
        game.createPlayers($('.nameInput').eq(0).val(), $('.nameInput').eq(1).val(), $('.nameInput').eq(2).val())
    }
}

export default domUpdates;
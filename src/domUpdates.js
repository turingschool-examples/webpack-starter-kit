import $ from 'jquery';
import Game from './Game.js'

let domUpdates = {

    startGame (game) {
        game.startGame($('.nameInput').val(), $('.nameInput').eq(1).val(), $('.nameInput').eq(2).val())
    }
}

export default domUpdates;
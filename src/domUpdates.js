import $ from 'jquery';
import Game from './Game.js'

let domUpdates = {

    startGame (game) {
        game.startGame($('.nameInput').eq(0).val(), $('.nameInput').eq(1).val(), $('.nameInput').eq(2).val())

    },

    changeNames() {
        $('.player').eq(0).text($('.nameInput').eq(0).val())
        $('.player').eq(1).text($('.nameInput').eq(1).val())
        $('.player').eq(2).text($('.nameInput').eq(2).val())
    }
}

export default domUpdates;
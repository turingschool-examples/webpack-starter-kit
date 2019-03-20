import Player from './Player.js'
import Wheel from './Wheel.js'

class Game {
    constructor() {
        this.turn = 0;
        this.players = [];
    }
    fillBoard() {

    }
    createPlayers(name1, name2, name3) {
            let wheel = new Wheel()
            let player1 = new Player(name1);
            let player2 = new Player(name2);
            let player3 = new Player(name3);
            this.players.push(player1, player2, player3)
            wheel.spinWheel()
    }

}

export default Game;
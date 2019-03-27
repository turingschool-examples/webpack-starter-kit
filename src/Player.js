import domUpdates from './domUpdates.js'

class Player {
    constructor(id, name){
        this.name = name;
        this.bank = 0;
        this.score = 0;
        this.id = id
    }

    calculateScore() {
        this.score += this.bank
    }

    calculateBank(value, game, player) {
        if(value === 'BANKRUPT') {
            domUpdates.enableButton()
            game.playerTurns();
            domUpdates.spinMessage(player);
            this.bank = 0
        } else if (value === 'LOSE A TURN') {
            domUpdates.enableButton()
            game.playerTurns();
            domUpdates.spinMessage(player);
        } else {
            this.bank += parseInt(value)
        }
        console.log(value)
    }
}

export default Player;
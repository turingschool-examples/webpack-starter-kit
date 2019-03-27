class Player {
    constructor(name){
        this.name = name;
        this.bank = 0;
        this.score = 0;
    }

    calculateScore() {
        this.score += this.bank
    }

    calculateBank(value, game) {
        if(value === 'BANKRUPT') {
            this.bank = 0
            game.playerTurns();
        } else if (value === 'LOSE A TURN') {
            game.playerTurns();
        } else {
            this.bank += value
        }
    }
}

export default Player;
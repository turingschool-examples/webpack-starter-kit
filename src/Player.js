

class Player {
    constructor(name){
        this.name = name;
        this.bank = 0;
        this.score = 0;
    }
    calculateScore() {
        
    }
    calculateBank(value, game) {
        if(value === 'BANKRUPT') {
            this.bank = 0
        } else if (value === 'LOSE A TURN') {
            game.playersTurn()
        } else {
            this.bank += value
        }
        console.log(this.bank)
    }
}

export default Player;
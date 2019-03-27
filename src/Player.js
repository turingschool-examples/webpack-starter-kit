import domUpdates from './domUpdates.js'

class Player {
    constructor(name, playerId) {
        this.name = name;
        this.score = 0;
        this.playerId = playerId;
    };

    addScore(scoreAmt) {
        console.log('change score, correct guess')
        let newScore = this.score += scoreAmt;
        domUpdates.changeScore(newScore, this.playerId);
        console.log(newScore);
    //     game.checkPlayer()

};

lightningScore(num) {
    this.score += num;
    //     game.checkPlayer()
    //     const newScore = game.answers[i].response;
    //     this.score += (this.newScore['player1${currentPlayer}'] * input)
};
}

export default Player;
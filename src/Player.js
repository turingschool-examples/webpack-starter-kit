class Player {
    constructor(name, playerId) {
        this.name = name;
        this.score = 0;
        this.playerId = playerId;

    };

    addScore(scoreAmt) {
        console.log('change score, correct guess')
        this.score += scoreAmt;
        console.log(this.score);
        // domUpdates.changeScore();
     //change on dom
    //     game.checkPlayer()
    //     const newScore = game.answers[i].response;
    //     this.score += this.newScore['player1${currentPlayer}']
};

lightningScore(num) {
    this.score += num;
    //     game.checkPlayer()
    //     const newScore = game.answers[i].response;
    //     this.score += (this.newScore['player1${currentPlayer}'] * input)
};
}

export default Player;
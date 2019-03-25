class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    };

    addScore(num) {
        this.score += num;
        console.log('updscore', this.score)
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
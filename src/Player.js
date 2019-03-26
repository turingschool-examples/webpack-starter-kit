class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;

    };

    //player 1 = i0
    //player 2 = i1


    addScore(num) {
        console.log('updscore', this.score)
        this.score += num;
       
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
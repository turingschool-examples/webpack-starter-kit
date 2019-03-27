import index from './index.js';
import Player from './Player.js';
import Round from './Round.js';
import LightningRound from './LightningRound.js';
import domUpdates from './domUpdates.js';


class Game {
  constructor(dataset) {     
    this.surveys = dataset;
    this.player1 = null;
    this.player2 = null;
    this.round = null;
    this.lightningRound = null;
    this.roundNumber = 0;
    this.currentPlayer = null;
    // this.round = [new Round(), new Round(), new LightningRound()];
};

createPlayer(name1, name2) {
    this.player1 = new Player(name1, 1);
    console.log(this.player1);
    this.player2 = new Player(name2, 2);
    console.log(this.player2); 
    this.currentPlayer = this.player1;
       console.log(this.currentPlayer);
};

switchPlayer() { 
    console.log('player', this.currentPlayer);
    if(this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2; 
    } else {
        this.currentPlayer = this.player1;
    }
   console.log('newplayer', this.currentPlayer);
};

createRound() {
    const survey = this.surveys[Math.floor(Math.random() * this.surveys.length)];
    this.round = new Round(survey);
    console.log(survey);
    this.roundNumber++;
    if(this.roundNumber > 0){
        domUpdates.progressBar(this.
            roundNumber);
    } 

    if(this.roundNumber === 3) {
        this.round.lightningRound();
    }

    if(this.roundNumber === 5){
        //play with this number
       domUpdates.winnerMessage(this.player1, this.player2)
       // return
     }
    const question = survey.question;
    domUpdates.appendQuestion(question);
};

getAnswer(guess) {
    this.round.checkAnswer(guess, this.currentPlayer, this);
    };

// lightningRound() {
//     console.log('create lightning round');
//     domUpdates.multiplierMessage(this.player1, this.player2);
//     const survey = this.surveys[Math.floor(Math.random() * this.surveys.length)];
//     this.lightningRound = new LightningRound();
// //we will have to pass everything into this
// //what is the point of having a new instance?
// };

lightningAnswer(guess) {
    this.lightningRound.checkLrAnswer(guess, this.currentPlayer, this);
}
}

export default Game;

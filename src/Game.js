import index from './index.js';
import Player from './Player.js';
import Round from './Round.js';
import lightningRound from './LightningRound.js';
import domUpdates from './domUpdates.js';


class Game {
  constructor(dataset) {     
    this.surveys = dataset;
    this.player1 = null;
    this.player2 = null;
    this.round = null;
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
        domUpdates.progressBar(this.roundNumber);
    } 
    if(this.roundNumber === 5){
        //play with this number
       domUpdates.winnerMessage(this.player1, this.player2)
     }
    const question = survey.question;
    domUpdates.appendQuestion(question);
};

getAnswer(guess) {
    this.round.checkAnswer(guess, this.currentPlayer, this);

    };
};



//current turn tracker, pass in the player who is playing vs array of player or find player who is playing in array

        //   }
        // }
        //for new player
        //keep checking answers
        //player two is default on round 2
        //lowest scoring player is default on LR

        // countRound() {
        //   roundNumber++;
              // createRound();
        // }

        // fastMoney() {
        //   if (roundNumber = 3) {
        //     const fastMoney = new FastMoney;
        //   }
        // }
// }

// declareWinner()
// player1.score > or < player2.score
// if player1 is greater, delare p1 winner
// else player2 winner
//     change innertext fire popup w/
//     new game button


export default Game;

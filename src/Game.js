import index from './index.js';
import Player from './Player.js';
import Round from './Round.js';
import lightningRound from './LightningRound.js';
import domUpdates from './domUpdates.js';


class Game {
  constructor(dataset) {     
    this.surveys = dataset;
    this.players = [];
    this.round = null;
    this.roundNumber = 0;
    this.currentPlayer = 0;
    // this.round = [new Round(), new Round(), new LightningRound()];
  };

  createPlayer(name1, name2) {
    let player1 = new Player(name1);
    let player2 = new Player(name2);
    this.players.push(player1, player2);
    //how do we handle players in the array, how do we track them, how do we assign scores to them, how do we switch between them?
  };

    switchPlayer() {
     if(this.currentPlayer === 1) {
        this.currentPlayer = 0;
     } else {
          this.currentPlayer++;
     }
    };   //correlate to index of players

  createRound() {
    const survey = this.surveys[Math.floor(Math.random() * this.surveys.length)];
    this.round = new Round(survey);
    console.log(survey);
    this.roundNumber++; 
    };

    getAnswer(guess) {
        console.log(this.players);
        this.round.checkAnswer(guess, this.players);
    };



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

}

export default Game;

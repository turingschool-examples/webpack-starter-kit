
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
    // this.round = [new Round(), new Round(), new LightningRound()];
  };


  createPlayer(name1, name2) {
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
  };

  //functionally scoped players - DNE after this runs


        // checkPlayer() {
        //   isPlayer = player;
        // }    

  createRound() {
    const survey = this.surveys[Math.floor(Math.random() * this.surveys.length)];
    this.round = new Round(survey);
    console.log(survey);
    this.roundNumber++; 
    };




    // switchPlayer() {
    // if player = player 1
    // switch to player 2
    // else player 2
    // switch to player 1
    // }



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

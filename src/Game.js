
import index from './index.js';
import Player from './Player.js';
import Round from './Round.js';
import lightningRound from './LightningRound.js';
import domUpdates from './domUpdates.js';


class Game {
  constructor(dataset) {     
    this.surveys = dataset;
    this.roundNumber = 1;
    // this.dataset = dataset;
    // this.round = [new Round(), new Round(), new LightningRound()];
  };

  // getSurveys(dataset) {
  //   this.surveys.push(dataSet);
  //   console.log(this.dataSet);
  //     console.log(this.surveys);
  // };

  createPlayer(name1, name2) {
    let player1 = new Player(name1);
    let player2 = new Player(name2);
    console.log(player1);
  };

  //functionally scoped players - DNE after this runs


        // checkPlayer() {
        //   isPlayer = player;
        // }


        // createRound() {
        //   var round = new Round;
        //   round.answers.push //how we push the answers into answers array
        // }



//   switchPlayer() {
   //if player = player 1
   //switch to player 2
   //else player 2
   //switch to player 1
//   }

 //     switchPlayer()
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

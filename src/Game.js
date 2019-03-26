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
    let player1 = new Player(name1, 1);
    console.log(player1);
    let player2 = new Player(name2, 2);
     console.log(player2); 
    this.currentPlayer = player1;
    console.log(this.currentPlayer);
};

switchPlayer() {
   if(this.currentPlayer.playerId = 1 ? 2 : 1);
   //always goes to player 2 and gives them the score
   console.log('newplayer',this.currentPlayer);
}; 
createRound() {
    const survey = this.surveys[Math.floor(Math.random() * this.surveys.length)];
    this.round = new Round(survey);
    console.log(survey);
    this.roundNumber++; 
};

getAnswer(guess) {
    const score = this.round.checkAnswer(guess, this.currentPlayer);
    console.log('correct score', round.score);
    //does not ontain score value from round
    // if(score && this.currentPlayer = 1) {
    //     domUpdates.changeP1Score(score);
    // }
    // if(score && this.currentPlayer = 2) {
    //     domUpdates.changeP2Score(score);
    // }
    if (!score) {
        console.log('score', score);
    this.switchPlayer(this.currentPlayer)
    } 

};

//currrent turn tracker, pass in the player who is playing vs array of player or find player who is playing in array

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

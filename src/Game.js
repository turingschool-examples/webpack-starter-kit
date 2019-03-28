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
  };

  createPlayer(name1, name2) {
    this.player1 = new Player(name1, 1);
    domUpdates.highlightPlayer(this.player1.playerId);
    this.player2 = new Player(name2, 2);
    this.currentPlayer = this.player1;
  };

  switchPlayer() { 
    if(this.currentPlayer === this.player1) {
      domUpdates.unhighlightPlayer(this.player1.playerId)
      domUpdates.highlightPlayer(this.player2.playerId);
      this.currentPlayer = this.player2; 
    } else {
      this.currentPlayer = this.player1;
      domUpdates.unhighlightPlayer(this.player2.playerId)
      domUpdates.highlightPlayer(this.player1.playerId);
    }
  };

  createRound() {
    const survey = this.surveys[Math.floor(Math.random() * this.surveys.length)];
    this.round = new Round(survey);
    console.log(survey);
    this.roundNumber++;
    if(this.roundNumber > 0){
      domUpdates.progressBar(this.roundNumber);
    } ;
    if(this.roundNumber === 2) {
       this.switchPlayer();
    };
    if(this.roundNumber === 3) {
       this.currentPlayer === this.player1;
        domUpdates.highlightPlayer(this.currentPlayer.playerId);  
        domUpdates.unhighlightPlayer(!this.currentPlayer.playerId); 
        this.lightningRound = new LightningRound(survey, this.currentPlayer);   
      } ;
    if(this.roundNumber === 4) {
      this.switchPlayer();
      domUpdates.highlightPlayer(this.currentPlayer.playerId);  
      domUpdates.unhighlightPlayer(!this.currentPlayer.playerId); 
      this.lightningRound = new LightningRound(survey, this.currentPlayer);
    };
  
    const question = survey.question;
    domUpdates.appendQuestion(question);
   };

   getAnswer(guess) {
    if(this.roundNumber < 3) {
      this.round.checkAnswer(guess, this.currentPlayer, this);
    } else {
      this.lightningRound.checkLrAnswer(guess, this.currentPlayer, this);
    }
  };

}

export default Game;

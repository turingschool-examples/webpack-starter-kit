import Game from './Game.js';

class Player {
  constructor(name) {
    this.name = name;
    this.totalScore = 0;
    this.roundScore = 0;
    this.gameWinner = false;
    this.currentTurn = false;
  }
  winRound() {
    this.totalScore += this.roundScore;
    // game.scoreUpdate();
  }
  winGame() {
    this.gameWinner = true;
    // start bonus round
  }
  resetScore() {
    this.roundScore = 0;
    // game.scoreUpdate();
  }
  buyVowel() {
    if (this.roundScore >= 100) {
        this.roundScore -= 100;
        // player chooses a vowel;
      }
  }
};

export default Player;


// 
// import Round from 'Round';
// import LightningRound from 'LightningRound';
// import Player from 'Player';

class Game {

  constructor(player1, player2, surveys) {
    this.players = [player1, player2];
    this.currentRound = 0;
    this.surveys = surveys;
    this.currentPlayers = this.players[0].number;
  }

  startGame() {
    this.currentRound++
    this.nextRound();
  }

  // nextRound(surveys, currentRound) {
  //   if (currentRound === 3) {
  //     return new Round(surveys[currentRound - 1]);
  //   } else {
  //     return new LightningRound(surveys[currentRound - 1]);
  //   }
  // }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

}

export default Game;
 import Player from './Player.js';

 class Game {
  constructor(currentRound = 1, activePlayer, roundWinner, gameWinner){
    this.currentRound = currentRound,
    this.activePlayer = activePlayer,
    this.roundWinner = roundWinner,
    this.gameWinner = gameWinner
  }

  startGame(players) {
    console.log('game started!');
    this.createPlayers(players);
  }

  createPlayers(players) {
    const playerOne = new Player(players[0], true);
    const playerTwo = new Player(players[1]);
    const playerThree = new Player(players[2]);
    console.log(playerOne);
  }
  
}

// if (typeof module !== 'undefined') {
//   module.exports = Game;
// }

export default Game;
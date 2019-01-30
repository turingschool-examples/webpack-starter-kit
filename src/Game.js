 class Game {
  constructor(currentRound, activePlayer, roundWinner, gameWinner){
    this.currentRound = currentRound,
    this.activePlayer = activePlayer,
    this.roundWinner = roundWinner,
    this.gameWinner = gameWinner
  }

  startGame() {
    console.log('game started!');
  }
  
}

// if (typeof module !== 'undefined') {
//   module.exports = Game;
// }

export default Game;
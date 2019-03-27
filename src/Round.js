import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";
// import Game from "./Game.js"

class Round {
  constructor(players, wheel, puzzle) {
    this.players = players;
    this.currentWheel = wheel;
    this.activePlayer = 0;
    this.currentPuzzle = puzzle;
    this.solutionGuess = null;
    this.roundCountDown = 0;
  }

  getPuzzle(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    let randomPuzzle = array.splice(randomNum, 1);
    let puzzle = new Puzzle(randomPuzzle[0]);
    this.currentPuzzle = puzzle;
    this.roundCountDown = puzzle.numWords;
    return puzzle;
  }
  changeActivePlayers() {
    let oldPlayer, newPlayer;
    switch (true) {
    case (this.activePlayer === 0):
      oldPlayer = 0; newPlayer = 1;
      this.activePlayer = 1;
      break;
    case (this.activePlayer === 1): 
      oldPlayer = 1; newPlayer = 2;
      this.activePlayer = 2;
      break;
    case (this.activePlayer === 2):
      oldPlayer = 2; newPlayer = 0;
      this.activePlayer = 0;
      break;
    default:
      // alert('Something went wrong!');
      break;
    }
    domUpdates.turnOrder(oldPlayer, newPlayer);
    this.checkScore();
  }

  checkScore(e, game) {
    if (this.players[this.activePlayer].roundScore >= 100) {
      domUpdates.buyAVowel(e, game);
    }
  }



  updatePlayerScore(spinValue) {
    const player = this.players[this.activePlayer]
    if(!spinValue === "BANKRUPT"){
    player.roundScore += spinValue;
    domUpdates.displayScore(player.playerNumber, player.roundScore) 
    }
  }

  // TODO: DISPLAY REVEALED LETTER
  handleCorrectLetterChosen(splitAnswer, chosenLetter) {
    const spinValue = this.currentWheel.currentSpin
    // const player = this.players[this.activePlayer]
    splitAnswer.forEach(letter => {
      if (chosenLetter === letter) {
        // console.log('before: ', player.roundScore)
        this.updatePlayerScore(spinValue)
        domUpdates.displayCorrectLetter(splitAnswer, chosenLetter);
      }
    });
  }

  // TODO: Refactor to use entire solution
  // INVESTIGATE: Consider creating a Tile class
  guessLetter(event, game) {
    const splitAnswer = game.round.currentPuzzle.splitAnswer;
    const chosenLetter = event.currentTarget.innerText;
    if (splitAnswer.includes(chosenLetter)) {
      this.handleCorrectLetterChosen(splitAnswer, chosenLetter)
      this.checkScore();
      // this.roundCountDown--
      // if(this.roundCountDown == 0){
      // game.createRound();
      // }
    } else {
      this.changeActivePlayers();
    }
  }

  handleSolutionGuess(guess) {
    const solution = this.currentPuzzle.correctAnswer.toUpperCase();
    if (guess.toUpperCase() === solution) {
      // alert('Nailed it!');
      domUpdates.displaySolvedPuzzle();
    }
  }

}





export default Round;
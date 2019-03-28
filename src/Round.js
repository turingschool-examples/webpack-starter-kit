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
    // console.log(this.activePlayer)

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
      alert('Something went wrong!');
      break;
    }
    domUpdates.updateActivePlayer(oldPlayer, newPlayer, this.players[this.activePlayer]);
  }
  
  newTurn() {
    const player = this.players[this.activePlayer];
    this.changeActivePlayers()
    this.checkScore(player);
    domUpdates.yourTurnMessage(player);
  }

//NEW TURN
//change round.active player
//check active player score
//--buy vowel ok?
//update active player on dom
//ANNOUNCE SPIN
//clear previous spin on dom
// pulse wheel on dom



  // checkScore(player) {
  //   return player.roundScore >= 100 ? domUpdates.canBuyVowel(true) : domUpdates.canBuyVowel(false);
  // }



  updatePlayerScore(spinValue) {
    const player = this.players[this.activePlayer];
    spinValue === 0 ? player.roundScore = 0 : player.roundScore += spinValue;
    console.log('after: ', player, player.roundScore)

    domUpdates.displayScore(player.playerNumber, player.roundScore)
  }

  handleCorrectLetterChosen(splitAnswer, chosenLetter) {
    const spinValue = this.currentWheel.currentSpin
    // const player = this.players[this.activePlayer]
    splitAnswer.forEach(letter => {
      if (chosenLetter === letter) {
        this.updatePlayerScore(spinValue);
        domUpdates.displayCorrectLetter(splitAnswer, chosenLetter);
        domUpdates.spinAgainPrompt();
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
      // this.checkScore();
    } else {
      this.newTurn();
    }
  }

  handleSolutionGuess(guess) {
    const solution = this.currentPuzzle.correctAnswer.toUpperCase();
    if (guess.toUpperCase() === solution) {
      // alert('Nailed it!');
      domUpdates.displaySolvedPuzzle();
      domUpdates.solvePuzzleMessage(this.players[this.activePlayer]);
    }
  }

}





export default Round;
import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";
import Game from "./Game.js"

class Round {
  constructor(players, wheel, puzzle) {
    this.players = players;
    this.currentWheel = wheel;
    this.activePlayer = 0;
    this.currentPuzzle = puzzle;
    this.solutionGuess = null;
    this.roundCountDown = 0;
    this.roundCount = 1;
    this.vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  }

  getPuzzle(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    let randomPuzzle = array.splice(randomNum, 1);
    let puzzle = new Puzzle(randomPuzzle[0]);
    this.currentPuzzle = puzzle;
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
      alert('Something went wrong!');
      break;
    }
    domUpdates.updateActivePlayer(oldPlayer, newPlayer, this.players[this.activePlayer]);
  }
  
  newTurn() {
    const player = this.players[this.activePlayer];
    this.changeActivePlayers()
  }

  updateRoundScore(spinValue) {
    const player = this.players[this.activePlayer];
    spinValue === 0 ? player._roundScore = 0 : player.roundScore += spinValue;
    domUpdates.displayRoundScore(player.playerNumber, player.roundScore)
  }

  handleCorrectLetterChosen(splitAnswer, chosenLetter, spinValue) {
    // const spinValue = this.currentWheel.currentSpin
    splitAnswer.forEach(letter => {
      if (chosenLetter === letter) {
        this.updateRoundScore(spinValue);
        domUpdates.displayCorrectLetter(splitAnswer, chosenLetter);
        domUpdates.spinAgainPrompt();
      }
    });
  }
  checkPuzzleForLetter(splitAnswer, chosenLetter) {
    return splitAnswer.includes(chosenLetter);
  }

  guessLetter(event, game) {
    const splitAnswer = game.round.currentPuzzle.splitAnswer;
    const chosenLetter = event.currentTarget.innerText;
    const guesserScore = this.players[this.activePlayer]._roundScore;
    const vowel = this.vowels.includes(chosenLetter);
    let spinValue = this.currentWheel.currentSpin;

    switch (true) {
      case (guesserScore < 100 && vowel):
        alert("You dont have enough money to buy a vowel!");
        break;
      case (!this.checkPuzzleForLetter(splitAnswer, chosenLetter)):
       alert('Nope, that letter is not in the puzzle!')
       this.newTurn();
       break;
      case (vowel && guesserScore >= 100):
        this.players[this.activePlayer]._roundScore -= 100;
        this.handleCorrectLetterChosen(splitAnswer, chosenLetter, 0);
        break;
      default:
        this.handleCorrectLetterChosen(splitAnswer, chosenLetter, spinValue);
    }
  }

  handleSolutionGuess(guess, game) {
    let winner = this.players[this.activePlayer];
    if (this.currentPuzzle.solvePuzzle(guess)) {
      domUpdates.displaySolvedPuzzle();
      this.updateTotalScore(winner);
      setTimeout("alert('You solved the puzzle!');", 2000);
      this.nextRound(winner, game)
    } else {
      alert('Aw, you tried!');
    }
  }

  updateTotalScore(player) {
    player.totalScore += player._roundScore;
    domUpdates.displayTotalScore(this.activePlayer, player.totalScore);
  }

  nextRound(winner, game) {
    console.log('NEW ROUND')

    this.updateTotalScore(winner);
    this.players.forEach((player, index) => {
      player._roundScore = 0;
      domUpdates.displayRoundScore(index, 0);
    });
    game.createRound(this.currentWheel);
  }
  // congratulate winner
  // round score 0, total score updated
  // update round number
  // append new puzzle



}





export default Round;
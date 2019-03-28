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
    this.vowels = ['A','E', 'I', 'O', 'U','Y'];
  }

  getPuzzle(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    let randomPuzzle = array.splice(randomNum, 1);
    let puzzle = new Puzzle(randomPuzzle[0]);
    this.currentPuzzle = puzzle;
    this.roundCountDown = this.currentPuzzle.numLetters;
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
    const player = this.players[this.activePlayer-1];
    this.changeActivePlayers()
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


  updatePlayerScore(spinValue) {
    const player = this.players[this.activePlayer];
    spinValue === 0 ? player._roundScore = 0 : player.roundScore += spinValue;
    domUpdates.displayScore(player.playerNumber, player.roundScore)
  }

  handleCorrectLetterChosen(splitAnswer, chosenLetter) {
    const spinValue = this.currentWheel.currentSpin
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
    if(!this.vowels.includes(event.currentTarget.innerText)){
    this.letterOK(splitAnswer, chosenLetter)
    }else{
    if(this.players[this.activePlayer]._roundScore >= 100){
      this.vowelGuess(splitAnswer, chosenLetter);
      }else{
        alert("You dont have enough money to buy a vowel!");
      }
    }
  }

  vowelGuess(splitAnswer, chosenLetter){
    this.players[this.activePlayer]._roundScore -= 100;
    domUpdates.displayScore(this.players[this.activePlayer].playerNumber, this.players[this.activePlayer]._roundScore)
    console.log(this.players[this.activePlayer]._roundScore)
    if (splitAnswer.includes(chosenLetter)) {
        splitAnswer.forEach(letter => {
          this.roundCountDown--;
          if (chosenLetter === letter) {
            domUpdates.displayCorrectLetter(splitAnswer, chosenLetter);
            domUpdates.spinAgainPrompt();
          }
        })

    }else {
      this.newTurn();
    }
  }
  
  letterOK(splitAnswer, chosenLetter){
    if (splitAnswer.includes(chosenLetter)) {
      this.handleCorrectLetterChosen(splitAnswer, chosenLetter)
      // this.checkScore();
    }else {
      this.newTurn();
    }
  }

  handleSolutionGuess(guess) {
    const solution = this.currentPuzzle.correctAnswer.toUpperCase();
    if (guess.toUpperCase() === solution) {
      console.log('Nailed it!');
      domUpdates.displaySolvedPuzzle();
      game.round.rounCount++;
      domUpdates.solvePuzzleMessage(this.players[this.activePlayer], game.round.roundCount);
      return true;
    }
  }

  updateTotalScore(){
    let player = this.players[this.activePlayer]
    player.totalScore += player._roundScore;
    player._roundScore = 0;
    // domUpdates.displayTotalScore(player, player._roundScore)
  }

  

}





export default Round;
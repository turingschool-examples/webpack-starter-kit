 import Player from './Player.js';
 import data from './Data.js';
 import Puzzle from './Puzzle.js';
 import domUpdates from './domUpdates.js';
 import Wheel from './Wheel.js'

 class Game {
  constructor(playersArray = null, currentRound = 1, activePlayer, roundWinner = null, gameWinner = null, gamePuzzles = [], roundPuzzle = null) {
    this.currentRound = currentRound,
    this.activePlayer = activePlayer,
    this.roundWinner = roundWinner,
    this.gameWinner = gameWinner,
    this.gamePuzzles = gamePuzzles,
    this.players =  playersArray,
    this.roundPuzzle = roundPuzzle
  }

  startGame() {
    console.log('game started!');
    this.createPlayers(this.players);
    this.grabPuzzleBanks();
    domUpdates.removeStartPage();
    // const wheel  = new Wheel(this.randomizeBank(data.wheel));
    // wheel.populateWheel(this.randomizeBank(data.wheel));
    this.gamePuzzles[0].populateConsonantsBank();
    // this.randomizeBank(wheel.values);
    // wheel.singleWheelValue(wheel.values);
  }

  createPlayers() {
    const playerOne = new Player(this.players[0], true, 0);
    const playerTwo = new Player(this.players[1], false, 1);
    const playerThree = new Player(this.players[2], false, 2);
    domUpdates.displayPlayers(playerOne, playerTwo, playerThree);
    this.activePlayer = playerOne;
    this.players = [playerOne, playerTwo, playerThree]
    console.log(playerOne)
  }

  grabPuzzleBanks() {
    let puzzleArrayOne = data.puzzles.one_word_answers.puzzle_bank
    let puzzleArrayTwo = data.puzzles.two_word_answers.puzzle_bank
    let puzzleArrayThree = data.puzzles.three_word_answers.puzzle_bank
    let puzzleArrayFour = data.puzzles.four_word_answers.puzzle_bank
    let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
    this.randomizeBank(puzzleBank);
    // console.log('youink')
    let fourPuzzles = this.setGamePuzzles(puzzleBank);
    let roundPuzzle = this.setRoundPuzzle(fourPuzzles);
    // console.log(roundPuzzle);
    this.roundPuzzle = roundPuzzle.correct_answer;
    console.log(this.roundPuzzle)
    domUpdates.displayCategory(roundPuzzle);
    domUpdates.populateRoundPuzzle(roundPuzzle);
    return puzzleBank;
  }

  randomizeBank(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const randomIndex = Math.floor((Math.random() * (arr.length - i))) + i;
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
  }

  setGamePuzzles(puzzleBank) {
    let fourPuzzles = puzzleBank.slice(0, 4);
    this.gamePuzzles = fourPuzzles.map(puzzle => {
      return new Puzzle(puzzle.category, puzzle.total_number_of_letters, puzzle.correct_answer, puzzle.description, 0, )
    })
    return fourPuzzles;
  }

  setRoundPuzzle(fourPuzzles) {
    let roundPuzzle = fourPuzzles.pop();
    return roundPuzzle;
    // domUpdates.displayPuzzle();
  }

  compareClickedButton(clickedLetter, wheel, button) {
    console.log(clickedLetter);
    let splitPuzzle = this.roundPuzzle.toUpperCase().split('')
    let letterCount = 0;

    if(splitPuzzle.includes(clickedLetter)) {
        splitPuzzle.forEach(letter => {
        if(letter === clickedLetter) { 
          letterCount++;
          console.log(letterCount);
          console.log('this letter is here')
          domUpdates.revealGuessedLetter(letter, button);
        } 
      });
          let guessValue = wheel.multiplyRoundValue(letterCount);
          console.log(guessValue)
          let roundScore = this.activePlayer.incrementRoundScore(guessValue);
          console.log(roundScore);
          domUpdates.updateRoundScore(roundScore, this.activePlayer.playerNumber);
     }
     else {
        console.log('this letter is not here');
        this.changeTurn();
      }
      domUpdates.disableButton(button);
  }

  changeTurn() {
    // console.log(this.activePlayer)
      if(this.activePlayer === this.players[0]) {
        this.players[0].active = false;
        this.players[1].active = true;
        this.activePlayer = this.players[1]
        console.log(this.activePlayer)
      } else if(this.activePlayer === this.players[1]) {
        this.players[1].active = false;
        this.players[2].active = true;
        this.activePlayer = this.players[2]
      } else {
        this.players[0].active = true;
        this.players[2].active = false;
        this.activePlayer = this.players[0]
      }
    console.log(this.players)
  }

}

// if (typeof module !== 'undefined') {
//   module.exports = Game;
// }

export default Game;
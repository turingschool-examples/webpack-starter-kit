import Player from './Player.js';
import data from './Data.js';
import Puzzle from './Puzzle.js';
import domUpdates from './domUpdates.js';
import Wheel from './Wheel.js'
import BonusWheel from './Bonus-Wheel.js'

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

  startGame(playersArray) {
    this.createPlayers(playersArray);
    this.grabPuzzleBanks();
    domUpdates.removeStartPage();
    this.gamePuzzles[0].populateConsonantsBank();
    domUpdates.promptToSpin(this.players);
  }

  createPlayers(playersArray) {
    const playerOne = new Player(playersArray[0], 0);
    const playerTwo = new Player(playersArray[1], 1);
    const playerThree = new Player(playersArray[2], 2);
    domUpdates.displayPlayers(playerOne, playerTwo, playerThree);
    this.activePlayer = playerOne;
    this.players = [playerOne, playerTwo, playerThree]
  }

  grabPuzzleBanks() {
    let puzzleArrayOne = data.puzzles.one_word_answers.puzzle_bank
    let puzzleArrayTwo = data.puzzles.two_word_answers.puzzle_bank
    let puzzleArrayThree = data.puzzles.three_word_answers.puzzle_bank
    let puzzleArrayFour = data.puzzles.four_word_answers.puzzle_bank
    let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
    this.randomizeBank(puzzleBank);
    let fourPuzzles = this.setGamePuzzles(puzzleBank);
    let roundPuzzle = this.setRoundPuzzle(this.gamePuzzles);
    this.roundPuzzle = roundPuzzle.correctAnswer;
    domUpdates.displayCategory(roundPuzzle);
    domUpdates.populateRoundPuzzle(this.roundPuzzle);
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
    let fourPuzzles = puzzleBank.slice(0, 5);
    this.gamePuzzles = fourPuzzles.map(puzzle => {
      return new Puzzle(puzzle.category, puzzle.total_number_of_letters, puzzle.correct_answer, puzzle.description, 0)
    })
    return fourPuzzles;
  }

  setRoundPuzzle(fourPuzzles) {
    let roundPuzzle = fourPuzzles.pop();
    return roundPuzzle;
  }

  compareClickedButton(clickedLetter, wheel, button, players) {
    let splitPuzzle = this.roundPuzzle.toUpperCase().split('')
    let letterCount = 0;

    if (splitPuzzle.includes(clickedLetter)) {
      splitPuzzle.forEach(letter => {
        if (letter === clickedLetter) { 
          letterCount++;
          domUpdates.revealGuessedLetter(letter, button);
        } 
      });
      let guessValue = wheel.multiplyRoundValue(letterCount);
      if (guessValue === NaN) {
        this.activePlayer.roundScore = 0;
      }
      let roundScore = this.activePlayer.incrementRoundScore(guessValue);
      domUpdates.updateRoundScore(roundScore, this.activePlayer.playerNumber);
      }
     else {
      this.changeTurn(players);
    }
    if(this.currentRound < 2) {
    domUpdates.disableButton(button);
    domUpdates.disableVowelButtons();
    domUpdates.enableSpinButton();
    domUpdates.disableConsonants();
  }
    return true;
  }

  changeTurn() {

     if (this.activePlayer === this.players[0]) {
        this.activePlayer = this.players[1]
      } else if (this.activePlayer === this.players[1]) {
        this.activePlayer = this.players[2]
      } else {
        this.activePlayer = this.players[0]
      }

    if (this.currentRound < 3) {
    domUpdates.disableVowelButtons();
    domUpdates.disableConsonants();
    domUpdates.highlightActivePlayer(this.players);
    domUpdates.promptToSpin(this.players);
    domUpdates.enableSpinButton();
  }
  }

  compareFinalAnswer(answer, players) {
    if (answer.toLowerCase() === this.roundPuzzle.toLowerCase()) {
      this.roundWinner = this.activePlayer;
      this.activePlayer.totalScore += this.activePlayer.roundScore
      domUpdates.clearRoundPuzzle(this.roundPuzzle);
      domUpdates.updateTotalScore(this.activePlayer, this.activePlayer.playerNumber);
      domUpdates.displayRoundWinner(this.roundWinner)
      this.goToNextRound();
      return true;
    } else {
      this.changeTurn(players);
    }
  }

  determineWinner() {
    let winningScore = this.players.map(player => {
      return player.totalScore;
    }).sort((a, b) => {
      return b - a
    }).shift();

    let winningPlayer = this.players.find(player => {
      return player.totalScore === winningScore
    })

    return winningPlayer
  }

  goToNextRound() {
    this.players.forEach(player => {
      player.roundScore = 0
    })
    domUpdates.resetRoundScores(this.players);
    domUpdates.solvePuzzlePrompt();
    this.currentRound++
    let roundPuzzle = this.setRoundPuzzle(this.gamePuzzles);
    this.roundPuzzle = roundPuzzle.correctAnswer;
    domUpdates.displayCategory(roundPuzzle)
    domUpdates.populateRoundPuzzle(this.roundPuzzle);
    domUpdates.removeDisables();
    
    if (this.currentRound > 1) {
      let winningPlayer = this.determineWinner();
      let bonusWheel = new BonusWheel(null, null, winningPlayer);
      bonusWheel.newButton();
    }
  }
}


export default Game;
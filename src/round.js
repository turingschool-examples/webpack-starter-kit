import data from './data_wheel-of-fortune';
import Puzzle from "./puzzle";
import DomUpdates from './dom-updates';
import Wheel from './wheel';

class Round {
  constructor(currentRound) {
    this.roundNumber = currentRound,
    this.correctRoundGuesses = [],
    this.allRoundGuesses = [],
    this.currentPlayer = 0,
    this.counter = 0,
    this.currWheel = new Wheel()
  }
  newRound(game) {
    this.roundNumber++;
    if (game.currentRound.currentPlayer !== 0) {
      game.currentRound.currentPlayer.totalCaps += game.currentRound.currentPlayer.roundCaps
    }
    this.getCurrentPlayer(game);
    game.players.map(player => player.roundCaps = 0);
    DomUpdates.updatePlayerScore(game);
    this.allRoundGuesses = [];
    this.determinePuzzleLength(game);
    this.displayDomPuzzle(game);
  }
  determinePuzzleLength(game) {
    let random = Math.floor((Math.random() * 23) + 0);
    switch (this.roundNumber) {
    case 1: 
      this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[random]);
      this.currWheel.wheelSlices = this.currWheel.getWheelSlices()
      break;
    case 2: 
      this.storePuzzle(data.puzzles.two_word_answers.puzzle_bank[random]);
      this.currWheel.wheelSlices = this.currWheel.getWheelSlices()
      break;
    case 3: 
      this.storePuzzle(data.puzzles.three_word_answers.puzzle_bank[random]);
      this.currWheel.wheelSlices = this.currWheel.getWheelSlices()
      break;
    case 4: 
      this.storePuzzle(data.puzzles.four_word_answers.puzzle_bank[random]);
      this.currWheel.wheelSlices = this.currWheel.getWheelSlices()
      break;
    case 5: 
      this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[random]);
      this.makeBonusRound(game);
    }
  }
  storePuzzle(puzzle) {
    this.getPuzzle(
      puzzle.category, 
      puzzle.number_of_words, 
      puzzle.total_number_of_letters, 
      puzzle.first_word, 
      puzzle.description, 
      puzzle.correct_answer);
  }
  getPuzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer) {
    this.roundPuzzle = new Puzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer);
    this.answer = this.roundPuzzle.ans.split('')
    this.answer = this.answer.map(letter=> letter.toUpperCase());
    this.wholeWord = this.answer;
  }
  appendPuzzleAns() {
    DomUpdates.appendAns()
  }
  displayDomPuzzle(game) {
    DomUpdates.updateRoundHintCategory(game);
    DomUpdates.appendPuzzle(game);
  }
  skipPuzzle(game) {
    if (game.currentRound.roundNumber !== 5) {
      this.roundNumber--;
      game.players.map(player=> player.roundCaps = 0);
      this.newRound(game)
    }
  }
  makeBonusRound(game) {
    game.bonusRound(this.roundNumber)
  }
  getCurrentPlayer(game) {
    DomUpdates.showCurrentPlayer(game);
    this.currentPlayer = game.players[this.counter];
    this.counter < 2 ? this.counter++ : this.counter = 0;   
    DomUpdates.updatePlayerScore(game);
    DomUpdates.showCurrentPlayer(game);
    DomUpdates.clearInput();
  }
  displayCurrentPlayer(game) {
    DomUpdates.showCurrentPlayer(game);
  }
  conditionalChecking(game, ltrGuess, vowels) {
    if (this.allRoundGuesses.includes(ltrGuess.toUpperCase())) {
      alert('This letter has already been guessed!');
    } else if (this.compareAns() && !vowels.includes(ltrGuess.toUpperCase())) {
      this.correctAnsFunc(game, ltrGuess);
      DomUpdates.toggleButtons();
    } else if (game.currentRound.compareAns() && vowels
      .includes(ltrGuess.toUpperCase())) {
      game.currentRound.correctAnsFunc(game, ltrGuess);
    } else if (!game.currentRound.compareAns() && vowels
      .includes(ltrGuess.toUpperCase())) {
      this.allRoundGuesses.push(this.currentPlayer.ans);
      this.allRoundGuesses.sort();
      DomUpdates.appendIncorrect();
      this.getCurrentPlayer(game);
    } else {
      this.allRoundGuesses.push(this.currentPlayer.ans);
      this.allRoundGuesses.sort();
      DomUpdates.appendIncorrect();
      this.getCurrentPlayer(game);
      DomUpdates.toggleButtons();
    }
  }
  compareAns() {
    return this.answer.map(letter => letter.toUpperCase())
      .includes(this.currentPlayer.ans.toUpperCase());
  }
  correctAnsFunc(game, ltrGuess) {
    this.correctRoundGuesses.push(this.currentPlayer.ans);
    this.allRoundGuesses.push(this.currentPlayer.ans);
    this.allRoundGuesses.sort();
    DomUpdates.createPuzzleClassArr(ltrGuess);
    DomUpdates.appendCorrect();
    this.answer = this.answer
      .filter(letter => letter.toUpperCase() !== ltrGuess.toUpperCase());
    if (this.answer.length === 0) {
      DomUpdates.appendWinner(game);
      this.newRound(game);
    }
    this.getCurrentPlayer(game);
    this.answer = this.answer.filter(char => char !== ' ' ? char : char = '');
  }
}
export default Round;
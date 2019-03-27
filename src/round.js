import data from './data_wheel-of-fortune';
import Puzzle from "./puzzle";
import DomUpdates from './dom-updates';
import Wheel from './wheel';

/*
data.wheel => wheel array of values
data.puzzles.one_word_answers.puzzle_bank => array of puzzle objects 
! goes up to four_word_answers !
*/

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
    let roundCaps = this.currentPlayer.roundCaps;
    let totalCaps = this.currentPlayer.totalCaps;

    this.getCurrentPlayer(game);
    this.roundNumber++;
    totalCaps = totalCaps += roundCaps;
    game.players.map(player => player.roundCaps = 0);
    DomUpdates.updatePlayerScore(game);
    this.allRoundGuesses = [];
    this.determinePuzzleLength();
    this.displayDomPuzzle(game);

  }
  determinePuzzleLength() {
    let random = Math.floor((Math.random() * 23) + 0);
    switch (this.roundNumber) {
    case 1: 
      this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[random]);
      break;
    case 2: 
      this.storePuzzle(data.puzzles.two_word_answers.puzzle_bank[random]);
      break;
    case 3: 
      this.storePuzzle(data.puzzles.three_word_answers.puzzle_bank[random]);
      break;
    case 4: 
      this.storePuzzle(data.puzzles.four_word_answers.puzzle_bank[random]);
      break;
    case 5: 
      this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[random]);
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
      game.currentRound.roundNumber--;
      game.newRound(game)
    }
  }
  getCurrentPlayer(game) {
    DomUpdates.showCurrentPlayer(game);
    this.currentPlayer = game.players[this.counter];
    this.counter < 2 ? this.counter++ : this.counter = 0;   
    DomUpdates.updatePlayerScore(game);
    DomUpdates.showCurrentPlayer(game);
  }
  displayCurrentPlayer(game) {
    DomUpdates.showCurrentPlayer(game);
  }
  
  
  checkPlayerGuess() {
    console.log('Array of ans', this.answer);
  
    //get player guess array
    // check player guess array against current array
  }
  // create an option method
  // switch statement based on their dom interaction
  // case guess: 
  
  playerGuessWord() {
    console.log('In guessword')
  }
  // ? Insert input & 2 buttons to tag event listeners on
  playerSpin() {
    console.log('In spin')
    
  }
  
  playerBuy() {
    console.log('In buy')
  }
  
  
  
}
export default Round;
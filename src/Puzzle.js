import Game from './Game.js';
import domUpdates from './domUpdates.js';

class Puzzle {
  constructor(puzzle) {
    this.guessedBank = [];
    this.category = puzzle.category;
    this.description = puzzle.description;
    this.answer = puzzle.correct_answer;
    this.numWords = puzzle.number_of_words;
  }

  checkUserGuess(letterInput, game) {
    let answer = this.answer.toUpperCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let foundMatch = false;
    answer.forEach(letter => {
      if (letter === letterInput) {
        domUpdates.displayLetterMatch(letterInput);
        this.guessedBank.push(letterInput);
        this.guessedBank = [...new Set(this.guessedBank)];
        domUpdates.displayGuessedLetters(this);
        foundMatch = true;
      }
      if (letterInput === vowels) {
        domUpdates.displayVowelMessage();
        foundMatch = true;
      }
    });
    if (!foundMatch) {
      game.switchPlayers();
    }
  }


}

export default Puzzle;
import data from './Data.js';
import domUpdates from './domUpdates.js';

class Puzzle {
  constructor(category, numberOfLetters, correctAnswer, description, guessedLetters = 0) {
    this.category = category,
    this.numberOfLetters = numberOfLetters,
    this.correctAnswer = correctAnswer,
    this.description = description,
    this.guessedLetters = guessedLetters
    this.consonantsBank = [],
    this.vowelsBank = []
  }

  countVowels(correctAnswer) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
  }

  populateConsonantsBank() {
    let consonants = this.consonantsBank = this.consonantsBank.concat(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'])
    let vowels = this.vowelsBank = this.vowelsBank.concat(['a', 'e', 'i', 'o', 'u'])
    domUpdates.displayLetters(consonants, vowels);
    return [consonants, vowels];
  }
 }

export default Puzzle;
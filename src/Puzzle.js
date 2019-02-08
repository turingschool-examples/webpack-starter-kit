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

  buyAVowel(player) {
    this.vowelsBank
    if(player.roundScore < 100) {
      window.alert('you dont have enough money')
      return;
    } else {
      player.roundScore -= 100
      domUpdates.updateRoundScore(player.roundScore, player.playerNumber)
      domUpdates.enableVowelButtons()
    }
  }

  populateConsonantsBank() {
    let consonants = this.consonantsBank = this.consonantsBank.concat(['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'])
    let vowels = this.vowelsBank = this.vowelsBank.concat(['A', 'E', 'I', 'O', 'U'])
    domUpdates.displayLetters(consonants, vowels);
    return [consonants, vowels];
  }
 }

export default Puzzle;
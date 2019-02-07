import Wheel from './Wheel.js'

class BonusWheel extends Wheel {
  constructor() {
    super();
    this.prizes = [
      'Trip to Ohio', 
      '2 dollar bill', 
      '7 Eleven Rewards card', 
      'Food court hot dog', 
      'A goat of your choosing'
    ];
  }
  revealConsonants() {
    // reveal a random amount of consonants between 1 and 6
  }
}

export default BonusWheel;
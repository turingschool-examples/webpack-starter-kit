import Clue from './clue.js'
import domUpdates from './domUpdates.js'

class Dailydouble extends Clue {
  constructor(answer, categoryId, categoryName, pointValue, question, randomNumber) {
    super(answer, categoryId, categoryName, pointValue, question);
    this.randomNumber = randomNumber;
  }

  doubleCountGenerator() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }

  giveDouble(selectedClue) {
    domUpdates.showWagerCard();
  }
}




export default Dailydouble;
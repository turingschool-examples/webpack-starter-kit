import Clue from './clue.js'
import domUpdates from './domUpdates.js'

class Dailydouble extends Clue {
  constructor(answer, categoryId, categoryName, pointValue, question, randomNumber) {
    super(answer, categoryId, categoryName, pointValue, question);
    this.randomNumber = randomNumber;
  };

  doubleCountGenerator(min, max) {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log("Random Number " + randomNumber);
    return randomNumber;
  };

  giveDouble(selectedClue) {
    console.log('Place yo bets')
    domUpdates.showWagerCard();
  }
}




export default Dailydouble;
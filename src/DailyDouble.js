import Clue from './Clue.js';
import domUpdates from './domUpdates.js';

class DailyDouble extends Clue {
  constructor(wager, question, pointValue, answer, categoryId) {
    super(question, pointValue, answer, categoryId);
    this.wager = wager;
  }

  wagerScore(wager) {
    this.pointValue += parseInt(wager);
    domUpdates.hidePopUp();
    domUpdates.displayClue(this.question);
  }
}

export default DailyDouble;
import Clue from './Clue.js';

class DailyDouble extends Clue {
  constructor(wager, question, pointValue, answer, categoryId) {
    super(question, pointValue, answer, categoryId);
    this.wager = wager;
  }

  wagerScore(wager) {
    this.pointValue += wager;
  }
}

export default DailyDouble;
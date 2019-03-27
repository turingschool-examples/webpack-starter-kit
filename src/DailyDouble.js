import Clue from './Clue.js';

class DailyDouble extends Clue {
  constructor(question, answer, pointValue) {
    super(question, answer, pointValue)
  }

  updatePointValue(newPointValue) {
    this.pointValue = Number(newPointValue);
  }

}

export default DailyDouble;
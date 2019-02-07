import Question from './Question.js'

class DailyDouble extends Question {
  constructor(question, answer, score) {
    super(question, answer, score)
    this.dailyDouble = true;
  }
}

export default DailyDouble;
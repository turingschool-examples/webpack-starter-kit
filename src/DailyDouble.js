import Question from './Question.js'

class DailyDouble extends Question {
  constructor(question, answer, category, point, round) {
    super(question, answer, category, point)
    this.round = round;
  }
}

export default DailyDouble;
class DailyDouble extends Question {
  constructor(question, answer, category, points, round) {
    super(question, answer, category, points)
      this.round = round;
  }
}

export default DailyDouble;
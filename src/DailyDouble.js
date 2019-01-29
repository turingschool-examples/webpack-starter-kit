class DailyDouble extends Clue {
  constructor(wager) {
    super(question, pointValue, answer, categoryId);
    this.wager = wager;
  }
}
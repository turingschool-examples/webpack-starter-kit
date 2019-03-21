class Question {
  constructor(question, answer, ansLength, ansSplit, description, category) {
    this.question = question;
    this.answer = answer;
    this.ansLength = ansLength;
    this.ansSplit = ansSplit || [];
    this.description = description;
    this.category = category;
  }
}

export default Question;
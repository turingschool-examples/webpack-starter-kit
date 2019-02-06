class Question {
  constructor(question, answer, category, categoryID, point) {
    this.question = question;
    this.answer = answer;
    this.category = category;
    this.categoryID = categoryID;
    this.point = point;
    this.currIndex = {};
  }
  validAns(answer, index, round) {
    // whether they get the question right or wrong decrease qCount //once qCount = 0 round is over
    //return Ans.toUppercase
  }
}

export default Question;
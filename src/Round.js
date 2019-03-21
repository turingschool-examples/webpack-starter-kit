class Round {
  constructor() {
    this.survey = getSurvey();
    this.answers = getAnswers();
  }

  getSurvey(surveys) {
    console.log(surveys.length);
    console.log(Math.floor(Math.random() * surveys.length));
  }

  getAnswers() {

  }
}

export default Round;
import gamedata from './gamedata.js';

class Round {
  constructor() {
    this.survey = this.getSurvey(gamedata.surveys);
    this.answers = this.getAnswers(gamedata.answers);
  }

  getSurvey(surveys) {
    const randomIndex = Math.floor(Math.random() * surveys.length);
    return surveys.slice(randomIndex)[0];
  }

  getAnswers(answers) {
    return answers.filter(function(answer) {
      return answer.surveyId === this.survey.id;
    }, this);
  }
}

export default Round;
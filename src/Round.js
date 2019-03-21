import gamedata from './gamedata.js';

class Round {
  constructor() {
    this.survey = this.getSurvey(gamedata.surveys);
    this.answers = [];
  }

  getSurvey(surveys) {
    const randomIndex = Math.floor(Math.random() * surveys.length);
    return surveys.splice(randomIndex, 1)[0];
  }

  getAnswers(answers) {
    return answers;
  }
}

export default Round;
import gamedata from './gamedata.js';

class Round {
  constructor(game) {
    this.survey = this.getSurvey(gamedata.surveys, game);
    this.answers = this.getAnswers(gamedata.answers);
  }

  getSurvey(surveys, game) {
    let randomIndex = Math.floor(Math.random() * surveys.length);
    while (game.usedSurveys.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * surveys.length);
    }
    game.usedSurveys.push(randomIndex);
    return gamedata.surveys[randomIndex];
  }

  getAnswers(answers) {
    return answers.filter(function(answer) {
      return answer.surveyId === this.survey.id;
    }, this).sort((a, b) => b.respondents - a.respondents);
  }
}

export default Round;
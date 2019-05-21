import domUpdates from './domUpdates';
import Round from './Round';
import data from '../data/surveys';

class Game {
  constructor(data) {
    this.data = data;
    this.round = 0;
    this.questions = [];
    this.surveys = [];
  }

  selectFourSurveys(){
    let allSurveys = this.data.surveys.map(el => el.id)
    let currentIndex = allSurveys.length;
    let tempValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;
      tempValue = allSurveys[currentIndex]
      allSurveys[currentIndex] = allSurveys[randomIndex]
      allSurveys[randomIndex] = tempValue;
    }
    this.questions = this.questions.concat(allSurveys.splice(0,4))
  }
    
  setGameSurveyObjects() {
  this.surveys = this.questions.map(el => this.createSurveyObject(el))
  }

  createSurveyObject(id) {
    let survey = this.data.surveys.find(el => el.id === id)
    let answer = this.data.answers.filter(el => el.surveyId === id)
    let object = {}
    object.survey = survey
    object.answer = answer
    return object;
  }

  updateRound() {
    this.round++;
    if (this.round > 2) {
      let lightningRound = new lightningRound();
    }else {
      let round = new Round(this.data[0]);
    }
  }

}


export default Game;
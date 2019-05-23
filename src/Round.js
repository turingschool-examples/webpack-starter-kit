import data from "../data";
import Turn from "./Turn";
import domUpdates from './domUpdates';
class Round {
  constructor (number) {
    this.randomNum = number || Math.floor(Math.random() * (14 - 2 + 1)) + 2;
    this.surveys = (this.pullSurveys(this.randomNum));
    this.currentRound = 1;
    this.turn = new Turn(this.surveys[this.currentRound - 1])
  }

  pullSurveys(randomSurveyID) {
    const randomSurveys = []
    let survey1 = data.surveys.find(survey => survey.id === randomSurveyID);
    let survey2 = data.surveys.find(survey => survey.id === randomSurveyID - 1);
    let survey3 = data.surveys.find(survey => survey.id === randomSurveyID + 1);
    randomSurveys.push(survey1, survey2, survey3);
    return randomSurveys;
  }

  changeRound() {
    if (this.turn.guessed.length === 3) {
      this.currentRound++
      this.turn = new Turn(this.surveys[this.currentRound - 1])
      domUpdates.showBoard(this, (this.currentRound - 1))
    }
  }
}

export default Round
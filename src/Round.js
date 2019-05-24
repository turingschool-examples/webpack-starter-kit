import data from "../data";
import Turn from "./Turn";
// import domUpdates from './domUpdates';
class Round {
  constructor (currentRound, currentPlayer, num) {
    this.randomNum = num || (Math.floor(Math.random() * (14 - 2 + 1)) + 2);
    this.survey = (this.pullSurveys(this.randomNum));
    this.currentRound = currentRound;
    this.currentPlayer = currentPlayer;
    this.turn = new Turn(this.survey)
  }

  pullSurveys(randomSurveyID) {
    // const randomSurveys = []
    let survey = data.surveys.find(survey => survey.id === randomSurveyID);
    // let survey2 = data.surveys.find(survey => survey.id === randomSurveyID - 1);
    // let survey3 = data.surveys.find(survey => survey.id === randomSurveyID + 1);
    // randomSurveys.push(survey1);
    // let idx = data.surveys.indexOf(survey1)
    // data.surveys.splice(idx, 1)
    // console.log(randomSurveys);
    
    return survey;
  }

  // changeRound() {
  //   if (this.turn.guessed.length === 3) {
  //     // this.currentRound++
  //     // this.turn = new Turn(this.survey, this)
  //     let that = this;
  //     // setTimeout(() => {
  //     //   domUpdates.showBoard(that, (that.currentRound - 1), that.currentPlayer)
  //     // }, 2000);
  //   }
  // }
  changePlayer(player) {
    this.currentPlayer = player;
  }
} 

export default Round
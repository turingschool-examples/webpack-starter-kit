// import Game from './Game'

class Round {
  constructor(survey) {
    this.isPlayerOneTurn = true;
    this.survey = survey;
  }

  returnCurrentQuestion(questionID) {
    let currentQuestion = this.survey.surveys.find(el => el.id === questionID)
    return currentQuestion.question
  }

  returnCurrentAnswers(questionID){
  let currentAnswers = this.survey.answers.filter(el => el.surveyId === questionID)
  return currentAnswers.map(el => el.answer)
  }

}


export default Round;
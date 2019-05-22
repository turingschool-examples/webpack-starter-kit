class Surveys {
  constructor(data) {
    this.data = data;
    this.ids = [];
    this.surveys = [];
  }

  selectFourQuestionsIDs(){
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
    this.ids = this.ids.concat(allSurveys.splice(0,4))
  }
    
  setGameSurveyObjects() {
  this.surveys = this.ids.map(el => this.createSurveyObject(el))
  }

  createSurveyObject(id) {
    let survey = this.data.surveys.find(el => el.id === id)
    let answers = this.data.answers.filter(el => el.surveyId === id)
    let object = {}
    object.survey = survey;
    object.answers = answers;
    return object;
  }
}

export default Surveys;
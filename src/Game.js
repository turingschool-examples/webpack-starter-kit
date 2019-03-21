class Game {
  constructor() {
    this.currentPlayer = 1;
    this.currentRound = 0;
    this.surveyData = [];
  }

  getSurveyData() {
    // this.surveyData = data.surveys.reduce((acc, survey) => {
    //   acc[survey.question] = data.answers.filter(answer => answer.surveyId = survey.id);
    //   return acc;
    // }, {});
  }

  getPlayers() {
    //get and display player names from inputs
    //instantiate new players w/ score 0
  }

  startNewGame() {
    //reset page defaults
    //startNewRound()
  }

  startNewRound() {
    this.currentRound++;
    //if round num is 3, start new fast round
    //if round num is < 3, start new regular round
  }

  getRandomSurvey() {
    //get a random survey based on whats left in survey data for the next round (Math.round surveyData.length)
    //can use this to pass in when starting new round
    //pop out of survey data so it doesn't get used again in this game
  }

  endGame() {

  }
}

export default Game;
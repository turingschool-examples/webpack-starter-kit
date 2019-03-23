import gameData from './data.js';
import domObject from './DOMupdates.js';

class Round {
  constructor(){
    this.currentRound = 0;
    this.currentAnswer = [];
  }

  generateRound() {
    const copiedAnswers = gameData.answers.slice();
    const copiedQuestions = gameData.surveys.slice();
    const randomNumber = genNumber();
    const questionObject = copiedQuestions.splice(randomNumber, 1);
    const questionString = questionObject[0].question;
    function genNumber() { return Math.floor(Math.random() * copiedQuestions.length) + 1 };
    
    //potentially need to move this function to Round object.
    //append the question to the DOM
    domObject.createQuestion(questionString);

    //create a array with the three associated answers and remove them from copied array
    const sortedAnswers = copiedAnswers.reduce( (associatedAnswers, currAnswer) => {
      if (currAnswer.surveyId === questionObject[0].id) {
        associatedAnswers.push(currAnswer);
      }
      return associatedAnswers;
    }, []).
    sort( (a,b) => {
      return b.respondents - a.respondents;
    })

    domObject.createAnswers(
      sortedAnswers[0].answer, 
      sortedAnswers[0].respondents, 
      sortedAnswers[1].answer,
      sortedAnswers[1].respondents,
      sortedAnswers[2].answer,
      sortedAnswers[2].respondents
    );
      // console.log(sortedAnswers);
    this.currentRound++;
    console.log(this.currentRound);
  }

  checkAnswers(answer){
    //pass in string from DOM input
    //check the variable against all three answers.
    //if the variable matches any answer, give player the points and show answer on the DOM. 
    //move the answer object into the player's correct answer array
  }

  checkAnswersTimed(answer){

  }

  removeQuestion(){

  }
};

export default Round;
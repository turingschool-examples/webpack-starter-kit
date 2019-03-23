import gameData from './data.js';
import domObject from './DOMupdates.js';

class Round {
  constructor(){
    this.currentRound = 0;
    this.currentAnswer = [];
  }

  generateRound() {
    let currentRoundAnswers = this.generateAnswers();

    domObject.createAnswers(
      currentRoundAnswers[0].answer, 
      currentRoundAnswers[0].respondents, 
      currentRoundAnswers[1].answer,
      currentRoundAnswers[1].respondents,
      currentRoundAnswers[2].answer,
      currentRoundAnswers[2].respondents
    );
  }

  generateQuestion() {
    const copiedQuestions = gameData.surveys.slice();
    const randomNumber = genNumber();
    const questionObject = copiedQuestions.splice(randomNumber, 1);
    const questionString = questionObject[0].question;
    
    domObject.createQuestion(questionString);
    function genNumber() { return Math.floor(Math.random() * copiedQuestions.length) + 1 };
    return questionObject;
  }

  generateAnswers() {
    const generatedQuestion = this.generateQuestion();
    const copiedAnswers = gameData.answers.slice();
    const sortedAnswers = copiedAnswers.reduce( (associatedAnswers, currAnswer) => {
      if (currAnswer.surveyId === generatedQuestion[0].id) { associatedAnswers.push(currAnswer) };
      return associatedAnswers;
    }, []).
    sort( (a,b) => {
      return b.respondents - a.respondents;
    })
    return sortedAnswers;
  }

  checkAnswers(answer){
    console.log('checkanswers works: ' + answer);
    //pass in string from DOM input --
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
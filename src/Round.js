import gameData from './data.js';
import domObject from './DOMupdates.js';

class Round {
  constructor(){
    this.currentRound = 0;
    this.currentAnswers = [];
  }

  generateRound() {
    const currentRoundAnswers = this.generateAnswers();
    this.currentAnswer = currentRoundAnswers;
    // console.log(this.currentAnswer);
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

  removeQuestion(){

  }
};

export default Round;
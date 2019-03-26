import gameData from "./data.js";
import domObject from "./DOMupdates.js";
import $ from "jquery";

class Round {
  constructor() {
    this.currentAnswers = [];
    this.copiedQuestions = gameData.surveys.slice();
  }

  generateRound() {
    const currentRoundAnswers = this.generateAnswers();
    this.currentAnswers = currentRoundAnswers;
    domObject.createAnswers(this.currentAnswers);
  }

  generateRoundTimed() {
    const currentRoundAnswers = this.generateAnswers();
    this.currentAnswers = currentRoundAnswers;
    domObject.createAnswers(this.currentAnswers);
    // console.log(`generateRoundTimed invoked`)
  }

  generateQuestion() {
    // console.log('starting length:', this.copiedQuestions.length);
    const randomNumber = genNumber(this.copiedQuestions);
    // console.log('Random Number:', randomNumber);
    const questionObject = this.copiedQuestions.splice(randomNumber, 1);
    // console.log('post-spliced length:', this.copiedQuestions.length);
    const questionString = questionObject[0].question;
    domObject.createQuestion(questionString);
    function genNumber(shrinkingArray) {
      return Math.floor(Math.random() * shrinkingArray.length);
    }
    return questionObject;
  }

  generateAnswers() {
    const generatedQuestion = this.generateQuestion();
    const copiedAnswers = gameData.answers.slice();
    const sortedAnswers = copiedAnswers
      .reduce((associatedAnswers, currAnswer) => {
        if (currAnswer.surveyId === generatedQuestion[0].id) {
          associatedAnswers.push(currAnswer);
        }
        return associatedAnswers;
      }, [])
      .sort((a, b) => {
        return b.respondents - a.respondents;
      });
    return sortedAnswers;
  }
}

export default Round;

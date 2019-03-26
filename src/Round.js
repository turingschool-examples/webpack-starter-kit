import gameData from "./data.js";
import domObject from "./DOMupdates.js";
import $ from "jquery";

class Round {
  constructor() {
    this.currentAnswers = [];
    this.slicedQuestions = gameData.surveys.slice();
  }

  generateRound() {
    this.currentAnswers = this.generateAnswers();
    domObject.createAnswers(this.currentAnswers);
  }

  //Will need to delete this redundancy if no unique alterations made.
  generateRoundTimed() {
    this.currentAnswers = this.generateAnswers();
    domObject.createAnswers(this.currentAnswers);
  }

  generateQuestion() {
    const randomElement = selectRandomElement(this.slicedQuestions);
    const splicedQuestionObject = this.slicedQuestions.splice(randomElement, 1);
    const questionString = splicedQuestionObject[0].question;
    domObject.createQuestion(questionString);
    function selectRandomElement(targetedArray) {
      return Math.floor(Math.random() * targetedArray.length);
    }
    return splicedQuestionObject;
  }

  generateAnswers() {
    const generatedQuestion = this.generateQuestion();
    const slicedAnswers = gameData.answers.slice();
    const sortedAnswers = slicedAnswers
      .reduce((associatedAnswers, currentAnswerObject) => {
        if (currentAnswerObject.surveyId === generatedQuestion[0].id) {
          associatedAnswers.push(currentAnswerObject);
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

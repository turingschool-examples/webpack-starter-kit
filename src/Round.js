import gameData from './data.js';
import domObject from './DOMupdates.js';
import $ from 'jquery';

class Round {
  constructor() {
    this.currentAnswers = [];
    this.copiedQuestions = gameData.surveys.slice();
  }

  generateRound() {
    const currentRoundAnswers = this.generateAnswers();
    this.currentAnswer = currentRoundAnswers;
    console.log('normal round DS', currentRoundAnswers)

    domObject.createAnswers(
      currentRoundAnswers[0].answer, 
      currentRoundAnswers[0].respondents, 
      currentRoundAnswers[1].answer,
      currentRoundAnswers[1].respondents,
      currentRoundAnswers[2].answer,
      currentRoundAnswers[2].respondents
    );
  }

  generateRoundTimed() {
    const currentRoundAnswers = this.generateAnswers();
    this.currentAnswer = currentRoundAnswers;
    console.log('timed round DS', currentRoundAnswers)
    //multiply all the current answer.respondents by the value derived from the radio btn

    // player should be given 30 seconds to guess
    // once the 30 seconds is up, fire Game.whoseTurn();
    // ^^ this will then switch it to the other player repeating the process;

    domObject.createAnswers(
      currentRoundAnswers[0].answer, 
      currentRoundAnswers[0].respondents, 
      currentRoundAnswers[1].answer,
      currentRoundAnswers[1].respondents,
      currentRoundAnswers[2].answer,
      currentRoundAnswers[2].respondents
    );
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
      return Math.floor(Math.random() * shrinkingArray.length) 
    };
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
};

export default Round;
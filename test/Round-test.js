import User from '../src/User';
import Round from '../src/Round';
// import Game from '../src/Game';
var chai = require('chai');
var expect = chai.expect;

const sampleData = {
  surveys: [
    { id: 1, question: 'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' },
    { id: 2, question: 'Name Something You Do To An Item Before Giving It As A Gift' }
  ],
  answers: [
    { answer: "Beer", respondents: 67, surveyId: 1 },
    { answer: "Bowling Ball", respondents: 5, surveyId: 1 },
    { answer: "Donuts", respondents: 24, surveyId: 1 },
    { answer: 'Buy It', respondents: 4, surveyId: 2 },
    { answer: 'Remove Price Tag', respondents: 27, surveyId: 2 },
    { answer: 'Wrap It', respondents: 61, surveyId: 2 }              
  ]
    }

describe('Round', function() {
  let round
  let user

  beforeEach(function() {
    round = new Round(sampleData, user);
    user = new User('Anneke', 'playerTwo');
  }) 

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current survey question', function(){
    expect(round.returnCurrentQuestion(1)).to.equal('If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?');
  })

  it('should return the current survey answers', function(){
    expect(round.returnCurrentAnswers(1)).to.eql(["Beer", "Bowling Ball", "Donuts"]);
  })
  
  // it should select a survey here or in game?
  
  it('should be able to change turns between players', function(){
    expect(round.isPlayerOneTurn).to.equal(true);
    
    round.changeTurns()
 
    expect(round.isPlayerOneTurn).to.equal(false);
  })

  it('should return a user\'s guess', function(){
    expect(round.returnGuess('bla')).to.equal('bla');
  })

  it('should evaluate if a guess is correct or not', function(){
    expect(round.returnGuess('Beer')).to.equal('Beer');
    expect(round.evaluateGuess(1, 'Beer')).to.equal(true);

    expect(round.returnGuess('bla')).to.equal('bla');  
    expect(round.evaluateGuess(1, 'bla')).to.equal(false);
  })

  it.skip('should eliminate a correct answer from the array, if it has already been guessed', function(){
    expect(round.returnGuess('Beer')).to.equal('Beer');
    expect(round.evaluateGuess(1, 'Beer')).to.equal(true);

    expect(round.returnRemainingAnswers(1, "Beer")).to.eql(["Bowling Ball", "Donuts"]);

    expect(round.returnGuess('Bowling Ball')).to.equal('Bowling Ball');
    expect(round.evaluateGuess(1, 'Beer')).to.equal(true);

    expect(round.returnRemainingAnswers(1, "Bowling Ball")).to.eql(["Donuts"]);
  })

  it('should start the next player\'s turn, if the current player answered incorrectly', function(){
    expect(round.isPlayerOneTurn).to.equal(true); 
    expect(round.evaluateGuess(1, 'bla')).to.equal(false);  
    round.evaluateIfChangeTurnsNeeded(1, 'bla');
    expect(round.isPlayerOneTurn).to.equal(false);
  })

  it('should increase player\'s score by respondents amount if they answered correctly', function(){
    expect(round.returnGuess('Beer')).to.equal('Beer');
    expect(round.evaluateGuess(1, 'Beer')).to.equal(true);
    round.increaseScore(1, 'Beer');
    expect(round.user.score).to.equal(67);
  })

  it.skip('should check if the correct answer array is empty, and end round if it is', function(){
    expect(round.returnRemainingAnswers(1, 'Beer')).to.eql(["Bowling Ball", "Donuts"]);
    expect(round.returnRemainingAnswers(1, 'Bowling Ball')).to.eql(["Donuts"]);
    expect(round.returnRemainingAnswers(1, 'Donuts')).to.eql([]);
    expect(round.finishRoundMessage()).to.equal('Round Over! Start the next one!')
  })

})
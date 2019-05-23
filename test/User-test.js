import User from '../src/User';
import Round from '../src/Round';
import Game from '../src/Game';
var chai = require('chai');
var expect = chai.expect;

const sampleData = {
surveys: [
  { id: 1, question: 'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' }],
    answers: [{ answer: "Beer", respondents: 67, surveyId: 1 },
            { answer: "Bowling Ball", respondents: 5, surveyId: 1 },
            { answer: "Donuts", respondents: 24, surveyId: 1 }]
  }

const sampleSurvey = { survey:
    { id: 1,
      question:
      'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' },
   answers:
    [ { answer: 'Beer', respondents: 67, surveyId: 1 },
      { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
      { answer: 'Donuts', respondents: 24, surveyId: 1 } ] }

describe('User', function() {
  let user;

  beforeEach(function() {
    user = new User('Anneke', 'playerTwo');
  }) 
  it('should be a function', function() {
    
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name', function(){
    expect(user.name).to.equal('Anneke');
  })

  it('should have a score', function(){
    expect(user.score).to.equal(0);
  })

  it('should have a player identifier', function(){
    expect(user.player).to.equal('playerTwo');
  })

  it('should update the score according to the amount of respondents', function(){
    expect(user.score).to.equal(0);
    user.updateScore(30);
    expect(user.score).to.equal(30);
  })

})





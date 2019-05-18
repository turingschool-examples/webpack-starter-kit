import User from '../src/User';
import Round from '../src/Round';
// import Game from '../src/Game';
var chai = require('chai');
var expect = chai.expect;

const sampleData = {
  surveys: [
    { id: 1, question: 'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' }],
      answers: [{ answer: "Beer", respondents: 67, surveyId: 1 },
              { answer: "Bowling Ball", respondents: 5, surveyId: 1 },
              { answer: "Donuts", respondents: 24, surveyId: 1 }]
    }

describe('Round', function() {
  let round

  beforeEach(function() {
    round = new Round(sampleData);
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


})
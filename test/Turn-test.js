import Turn from '../src/Turn';
import User from '../src/User';
var chai = require('chai');
var expect = chai.expect;

const sampleSurvey = { survey:
  { id: 1,
    question:
    'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' },
 answers:
  [ { answer: 'Beer', respondents: 67, surveyId: 1 },
    { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
    { answer: 'Donuts', respondents: 24, surveyId: 1 } ] }

describe('Turn', function() {
  let user1;
  let user2;
  let turn;

  beforeEach(function() {
    user1 = new User('Andreea', 'playerOne');
    user2 = new User('Emily', 'playerTwo');
    turn = new Turn(sampleSurvey);
  }) 

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should default the guess to an empty string', function() {
    expect(turn.guess).to.equal('');
  });

  it('should return the current survey answers', function(){
    expect(turn.returnCurrentAnswers()).to.eql(["Beer", "Bowling Ball", "Donuts"]);
  });

  it('should return the user\'s guess', function() {
    expect(turn.guess).to.equal('');
    turn.returnUserGuess('Beer')
    expect(turn.guess).to.equal('Beer');
  })

  it('should evaluate if a guess is correct or not', function(){
    expect(turn.returnCurrentAnswers()).to.eql(["Beer", "Bowling Ball", "Donuts"]);
    expect(turn.evaluateGuess('Beer')).to.equal(true);
  });

  it('should be able to change turns between players', function(){
    expect(turn.isPlayerOneTurn).to.equal(true);
    turn.changeTurns()
    expect(turn.isPlayerOneTurn).to.equal(false);
  });

})
import User from '../src/User';
import Round from '../src/Round';
import Game from '../src/Game';
import Turn from '../src/Turn';
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

describe('Round', function() {
  let user1;
  let user2;
  let game;
  let round;

  beforeEach(function() {
    user1 = new User('Anneke', 'playerOne');
    user2 = new User('Andreea', 'playerTwo');
    game = new Game(sampleSurvey, user1, user2)
    round = new Round(game, sampleSurvey, user1, user2);
  }) 

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should set an array of users', function(){
    expect(round.users).to.eql([user1, user2])
  });

  it('should have the currentPlayer default to null', function() {
    expect(round.currentPlayer).to.equal(null);
  });

  it('should update current player', function(){
    expect(round.currentPlayer).to.equal(null);
    round.updateCurrentPlayer();
    expect(round.currentPlayer).to.equal(user1)
  });

  it.skip('should eliminate a correct answer from the array, if it has already been guessed', function(){
    expect(round.returnGuess('Beer')).to.equal('Beer');
    expect(round.evaluateGuess(1, 'Beer')).to.equal(true);

    expect(round.returnRemainingAnswers(1, "Beer")).to.eql(["Bowling Ball", "Donuts"]);

    expect(round.returnGuess('Bowling Ball')).to.equal('Bowling Ball');
    expect(round.evaluateGuess(1, 'Beer')).to.equal(true);

    expect(round.returnRemainingAnswers(1, "Bowling Ball")).to.eql(["Donuts"]);
  })

  it('should start the next player\'s turn, if the current player answered incorrectly', function(){
    let turn = new Turn(sampleSurvey);
    round.updateCurrentPlayer();
    expect(round.currentPlayer).to.equal(user1); 
    expect(turn.evaluateGuess('NOPE')).to.equal(false);  
    round.evaluateIfChangeTurnsNeeded();
    expect(round.currentPlayer).to.equal(user2);
  });

  it.skip('should increase the score of the current user if answered correctly', function(){
    expect(turn.evaluateGuess()).to.equal(true);
    round.increaseScore(turn.guess);
    expect(user1.score).to.equal(67);
  })

  it.skip('should check if the correct answer array is empty, and end round if it is', function(){
    expect(round.returnRemainingAnswers(1, 'Beer')).to.eql(["Bowling Ball", "Donuts"]);
    expect(round.returnRemainingAnswers(1, 'Bowling Ball')).to.eql(["Donuts"]);
    expect(round.returnRemainingAnswers(1, 'Donuts')).to.eql([]);
    expect(round.finishRoundMessage()).to.equal('Round Over! Start the next one!')
  })



})
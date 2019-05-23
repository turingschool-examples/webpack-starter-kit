import Turn from '../src/Turn';
import User from '../src/User';
import Round from '../src/Round';
import Game from '../src/Round';
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

const sampleData = {
      surveys: [
        { id: 1, question: 'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' },
        { id: 2, question: 'Name Something You Do To An Item Before Giving It As A Gift' },
        { id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' },
        { id: 4, question: 'Why Might A Family Move Into A Bigger House?' }
        ],
      answers: [  { answer: "Beer", respondents: 67, surveyId: 1 },
                  { answer: "Bowling Ball", respondents: 5, surveyId: 1 },
                  { answer: "Donuts", respondents: 24, surveyId: 1 },
                  { answer: 'Buy It', respondents: 4, surveyId: 2 },
                  { answer: 'Remove Price Tag', respondents: 27, surveyId: 2 },
                  { answer: 'Wrap It', respondents: 61, surveyId: 2 },
                  { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
                  { answer: 'Calendar', respondents: 3, surveyId: 3 },
                  { answer: 'Watch', respondents: 58, surveyId: 3 },
                  { answer: 'Can Afford More', respondents: 5, surveyId: 4 },
                  { answer: 'Family Has Grown', respondents: 61, surveyId: 4 },
                  { answer: 'Want More Space', respondents: 33, surveyId: 4 }
                ]
        }
    

describe('Turn', function() {
  let user1;
  let user2;
  let game;
  let round;
  let turn;

  beforeEach(function() {
    user1 = new User('Anneke', 'playerOne');
    user2 = new User('Andreea', 'playerTwo');
    game = new Game(sampleData, user1, user2);
    round = new Round(game, sampleSurvey, user1, user2);
    turn = new Turn(user1, round);
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

  // it('should return the current survey answers', function(){
  //   expect(turn.returnCurrentAnswers()).to.eql(["Beer", "Bowling Ball", "Donuts"]);
  // });

  it('should return the user\'s guess', function() {
    expect(turn.guess).to.equal('');
    turn.returnUserGuess('Beer')
    expect(turn.guess).to.equal('Beer');
  })

  it('should evaluate if a guess is correct or not', function(){
    round.updateCurrentPlayer();
    expect(round.currentPlayer.name).to.equal('Anneke');
    turn.evaluateGuess('Beer');
    expect(round.currentPlayer.name).to.equal('Anneke');
    turn.evaluateGuess('Beeeeeeeer');
    expect(round.currentPlayer.name).to.equal('Andreea');
  });

  // it('should be able to change turns between players', function(){
  //   expect(turn.isPlayerOneTurn).to.equal(true);
  //   turn.changeTurns()
  //   expect(turn.isPlayerOneTurn).to.equal(false);
  // });

})
import User from '../src/User';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Game from '../src/Game';
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

describe('Round', function() {
  let user1;
  let user2;
  let game;
  let round;

  beforeEach(function() {
    user1 = new User('Anneke', 'playerOne');
    user2 = new User('Andreea', 'playerTwo');
    game = new Game(sampleData, user1, user2)
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

  it('should switch the turn to the other player', function(){
    round.updateCurrentPlayer();
    expect(round.currentPlayer).to.equal(user1);
    round.changeTurn();
    expect(round.currentPlayer).to.equal(user2)
  });

  it('should eliminate a correct answer from the array, if it has already been guessed, and end round if array is empty', function(){
    game.start();
    expect(round.answers.length).to.equal(3);
    round.eliminateGuessedAnswer(0);
    expect(round.answers.length).to.equal(2);
    round.eliminateGuessedAnswer(0);
    expect(round.answers.length).to.equal(1);
    round.eliminateGuessedAnswer(0);
    expect(round.answers.length).to.equal(0);
    game.updateRound();
    expect(game.roundCount).to.equal(2);
  })





})
// import User from '../src/User';
import Round from '../src/Round';
import Game from '../src/Game';
var chai = require('chai');
var expect = chai.expect;

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

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game(sampleData);
  }) 

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should have the four survey ids for the game', function() {
    game.selectFourSurveys()
    expect(game.questions).to.eql([1,2,3,4])
  });

  it('should have the four surveys for the game', function() {
    game.selectFourSurveys()
    game.setGameSurveyObjects()
    expect(game.surveys).to.eql([
      { survey:
        { id: 1,
          question:
          'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' },
       answer:
        [ { answer: 'Beer', respondents: 67, surveyId: 1 },
          { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
          { answer: 'Donuts', respondents: 24, surveyId: 1 } ] },
         
          { survey:
          {id: 2, 
          question: 'Name Something You Do To An Item Before Giving It As A Gift'} ,
          answer: 
          [{ answer: 'Buy It', respondents: 4, surveyId: 2 },
          { answer: 'Remove Price Tag', respondents: 27, surveyId: 2 },
          { answer: 'Wrap It', respondents: 61, surveyId: 2 }]},
          
          { survey:
            {id: 3, 
            question:'Name A Good Gift For Someone Who Is Always Late.'},
            answer: 
            [{ answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
            { answer: 'Calendar', respondents: 3, surveyId: 3 },
            { answer: 'Watch', respondents: 58, surveyId: 3 }]},

            { survey:
              {id: 4, 
              question: 'Why Might A Family Move Into A Bigger House?'},
              answer: 
              [{ answer: 'Can Afford More', respondents: 5, surveyId: 4 },
              { answer: 'Family Has Grown', respondents: 61, surveyId: 4 },
              { answer: 'Want More Space', respondents: 33, surveyId: 4 }]}
    ])
  });

  it('should create a survey object with question and corresponding answers', function(){
    expect(game.createSurveyObject(1)).to.eql(
      { survey:
        { id: 1,
          question:
          'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' },
       answer:
        [ { answer: 'Beer', respondents: 67, surveyId: 1 },
          { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
          { answer: 'Donuts', respondents: 24, surveyId: 1 } ] }
    )
    
  })

  it('should start the round at 0', function() {
    expect(game.round).to.equal(0);
  });

  it('should update rounds', function() {
    expect(game.round).to.equal(0);
    game.updateRound();
    expect(game.round).to.equal(1);
  })

})
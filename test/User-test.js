import User from '../src/User';
var chai = require('chai');
var expect = chai.expect;

const sampleData = {
surveys: [
  { id: 1, question: 'If You Drew Homer Simpson\'s Name In A Secret Santa Exchange, What Would You Buy Him?' }],
    answers: [{ answer: "Beer", respondents: 67, surveyId: 1 },
            { answer: "Bowling Ball", respondents: 5, surveyId: 1 },
            { answer: "Donuts", respondents: 24, surveyId: 1 }]
  }

describe('User', function() {

  it('should be a function', function() {
    const user = new User('Anneke', 'playerTwo');
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User('Anneke', 'playerTwo');
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name', function(){
    const user = new User('Anneke', 'playerTwo');
    expect(user.name).to.equal('Anneke');
  })

  it('should have a score', function(){
    const user = new User('Anneke', 'playerTwo');
    expect(user.score).to.equal(0);
  })

  it('should have a player identifier', function(){
    const user = new User('Anneke', 'playerTwo');
    expect(user.player).to.equal('playerTwo');
  })

  it.skip('should update user score', function(){
    const user = new User('Anneke', 'playerTwo');
    user.updateScore()
    expect(user.score).to.equal()//need to finish this test or move to Round?
  })
})





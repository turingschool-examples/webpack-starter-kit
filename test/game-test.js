import Game from '../src/game.js';
import chai from 'chai';
const expect = chai.expect;

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

describe('Game', function() {
  it('Should be have a name of Jeopardy by default', function() {
    var game = new Game();
    expect(game.name).to.equal('Jeopardy');
  });

  it('Should instantiate a new game when startGame method is run', function() {
    var game = new Game();
    expect(game.startGame()).to.equal(true);
  })

});
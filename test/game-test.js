import chai from 'chai';
import Game from '../src/Game.js'
const expect = chai.expect;


describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('instantiates our good friend, Game', function() {
    expect(game).to.be.an('object');
  })

});

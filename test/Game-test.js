import chai from 'chai';
import Game from '../src/Game'
const expect = chai.expect;

describe('Game', function () {

  let game;

  beforeEach(function () {
    game = new Game()
  })

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should instantiate Game', function () {
    expect(game).to.be.an.instanceOf(Game)
  })

});
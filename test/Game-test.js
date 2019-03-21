import chai from 'chai';
import Game from '../src/Game.js'
const expect = chai.expect;

describe('Game', function() {
  it('should swap players turn', function() {
    let game = new Game();
    expect(game.currentTurn).to.equal('p1');
    game.whoseTurn();
    expect(game.currentTurn).to.equal('p2');
    game.whoseTurn();
    expect(game.currentTurn).to.equal('p1');
  });
});
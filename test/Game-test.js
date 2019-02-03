import Game from '../src/Game.js'
import chai from 'chai'

const expect = chai.expect
 
describe('Game', function() {
  let game;

beforeEach(function() {
  game = new Game();
});  

  it('should instantiate a new game', function(){
    expect(game.currentRound).to.equal(1);
    expect(game.activePlayer).to.equal(this.activePlayer);
    expect(game.roundWinner).to.equal(null);
    expect(game.gameWinner).to.equal(null);
    expect(game.gamePuzzles.length).to.equal(0);
    expect(game.players).to.equal(null)
  });

  it('', function() {

  })
})  
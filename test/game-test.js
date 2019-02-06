import chai from 'chai';
import Game from '../src/Game.js';
import Player from '../src/Player.js';
import spies from 'chai-spies';
const expect = chai.expect;


describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('instantiates our good friend, Game', function() {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should have default parameters', () => {
    expect(game.round).to.equal(0);
    expect(game.players).to.deep.equal([]);
    expect(game.roundWheel).to.equal(null);
    expect(game.bonusWheel).to.deep.equal([]);
    expect(game.roundPuzzle).to.deep.equal([]);
  })

  it.skip('should increase round number', function() {
    expect(game.round).to.equal(0)
    game.newRound();
    expect(game.round).to.equal(1);
    // game.newRound();
    // game.newRound();
    // expect(game.round).to.equal(4);
  });

  it.skip('should create players', function() {
    buildGame();
    expect(game.players).to.have.lengthOf(3);
  });

// I dont think the method being invoked needs to be tested
  // it('should reset player\'s round score when round changes', function() {
  //   let player = new Player();
  //   game.changeRound();
  //   expect(player.resetScore).to.be.called(1);
  //   // expect(domUpdates.resetScore).to.be.called(1);
  // });

});

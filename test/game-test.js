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
    expect(game).to.be.an('object');
  })

  it('should increase round number', function() {
    game.changeRound();
    expect(game.round).to.equal(2);
    game.changeRound();
    game.changeRound();
    expect(game.round).to.equal(4);
  });

  it('should create players', function() {
    game.createPlayer();
    game.createPlayer();
    game.createPlayer();
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

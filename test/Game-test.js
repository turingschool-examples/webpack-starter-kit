import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Player from '../src/Player.js';
import Game from '../src/Game.js';

describe('Game', function() {
  let game;
  let player1;
  let player2;
  let player3;
  let players;
  beforeEach(function() {
    game = new Game();
    player1 = new Player('Steve');
    player2 = new Player('Vinton');
    player3 = new Player('Jacqueline');
    players = [player1, player2, player3];
  });

  it('should have default properties', function() {
    game = new Game(players);
    expect(game.roundCounter).to.equal(0);
    expect(game.players.length).to.eql(3);
  });
});
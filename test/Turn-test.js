import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Game from '../src/Game.js';
import Turn from '../src/Turn.js';
import Player from '../src/Player.js';

describe('Turn', function () {
  let wheel;
  let game;
  let player1;
  let player2;
  let player3;
  let players;
  beforeEach(function () {
    player1 = new Player('Steve');
    player2 = new Player('Vinton');
    player3 = new Player('Jacqueline');
    players = [player1, player2, player3];
    game = new Game(players);
    game.assignPuzzleBlock();
    game.start();
    game.currentRound.newTurn();
  });

  it('should have default properties', function () {
    expect(game.currentRound.currentTurn.currentScore).to.equal(0);
  });

  it('Should be able to spin the wheel', function() {
    expect(game.currentRound.currentTurn.spinWheel()).to.eql();
  });
})
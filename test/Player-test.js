import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import Round from '../src/Round';
import Player from '../src/Player';
import domUpdates from '../src/domUpdates'

chai.use(spies);
const assert = chai.assert;

describe('Player', () => {

  beforeEach(function() {
    chai.spy.on(domUpdates, 'updateScores', () => true);
  });

  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should be able to instantiate a new player', () => {
    let player = new Player();
    assert.instanceOf(player, Player);
  })

  it('should have a name', () => {
    const player = new Player('Brennan');
    assert.equal(player.name, 'Brennan');
  });

  it('should start with a score of 0', () => {
    const player = new Player('Brennan');
    assert.equal(player.score, 0);
  });

  it('should have a player number', () => {
    const player = new Player('Brennan');
    assert.equal(player.number);
  }); 

  it('should be able to update score', () => {
    const player = new Player('Brennan');
    player.updateScore(25);
    assert.equal(player.score, 25);
  });

  it('should be able add score from non zero number', () => {
    const player = new Player('Brennan');
    player.updateScore(25);
    player.updateScore(35);
    assert.equal(player.score, 60);
  });


  // // ! maybe belongs in Game
  // it('should be able to update its score', () => {
  //   const player = new Player('Brennan');
  //   player.updateScore(10);
  //   assert.equal(player.score, 10);
  // })

  // should have getScore
  // should have updateScore

});
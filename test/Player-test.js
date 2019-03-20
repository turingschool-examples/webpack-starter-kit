import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import Round from '../src/Round';
import Player from '../src/Player';
import domUpdates from '../src/domUpdates'

chai.use(spies);
const assert = chai.assert;

describe('Player', () => {

  it('should have a name', () => {
    const player = new Player('Brennan');
    assert.equal(player.name, 'Brennan');
  });

  it('should start with a score of 0', () => {
    const player = new Player('Brennan');
    assert.equal(player.score, 0);
  });

  it('should be able to get its name', () => {
    const player = new Player('Brennan');
    assert.equal(player.getName(), 'Brennan');
  });

  // ! maybe belongs in Game
  it('should be able to update its score', () => {
    const player = new Player('Brennan');
    player.updateScore(10);
    assert.equal(player.score, 10);
  })

  // should have getScore
  // should have updateScore

});
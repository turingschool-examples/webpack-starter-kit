import chai from 'chai';
import Player from '../src/Player.js';

const expect = chai.expect;

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a name', function() {
    let player = new Player('Lauren');

    expect(player.name).to.equal('Lauren');
  });

  it('should have a default name', function() {
    let player = new Player();

    expect(player.name).to.equal('Player');
  });

  it('should have a default score', function() {
    let player = new Player('Lauren');

    expect(player.score).to.equal(0);
  });

  it('should have a score', function() {
    let player = new Player('Lauren', 20);

    expect(player.score).to.equal(20);
  });
})
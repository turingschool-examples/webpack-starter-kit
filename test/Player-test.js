import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Player from '../src/Player.js';

describe('Player', function() {
  let player;
  beforeEach(function() {
    player = new Player('Steve');
  });

  it('should have default properties', function() {
    expect(player.name).to.equal('Steve');
    expect(player.roundScore).to.equal(0);
    expect(player.totalScore).to.equal(0);
  });
})
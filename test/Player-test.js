import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, 'solvePuzzle', () => true);

describe('Player', function() {
  let player;
  beforeEach(function() {
    player = new Player();
  });
  
  it('should have default properties', function() {
    expect(player.name).to.equal(player.name);
    player.score = 0;
  })

  it('should be an instance of Player', function() {

    expect(player).to.be.an.instanceof(Player);
    });
  });
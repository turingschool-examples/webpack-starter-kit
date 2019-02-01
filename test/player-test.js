import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/scripts/player.js'
import domUpdates from '../src/scripts/domUpdates.js';

describe('Testing Player methods and properties', function() {
  var player;

  beforeEach(function() {
    player = new Player('Kristen');
  });
  
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should have correct default properties', function() {
    expect(player.name).to.equal('Kristen');
    expect(player.roundCoins).to.equal(0);
    expect(player.totalCoins).to.equal(0); 
  });

});
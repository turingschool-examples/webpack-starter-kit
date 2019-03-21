import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js'

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
  it('Players should have a default name', function() {
    let player = new Player()
    
    expect(player.name).to.equal('Joe')
  })
  it('Players should have a default score of 0', function() {
    let player = new Player()
    
    expect(player.score).to.equal(0)
  })

});
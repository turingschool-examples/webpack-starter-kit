import chai from 'chai';
const expect = chai.expect;


import Player from '../src/Players';

describe('Players', () => {
  
  it('should have default properties', () => {
    const player = new Player();
    expect(player.name).to.equal(name);
    expect(player.turn).to.equal(turn);
  });

});
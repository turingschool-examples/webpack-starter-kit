import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
const expect = chai.expect;

describe('Game', () => {
  it('Game can be an object', () =>{
    const game = new Game();
    expect(game).to.be.an('object');

  })




})


import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
const expect = chai.expect;

describe('Game', () => {
  it('Game can be an object', () =>{
    const game = new Game();
    expect(game).to.be.an('object');

  })

  it('Should have an array of players', () =>{
    const game = new Game();
    game.start(['players', 'players', 'players']);
    expect(game.players.length).to.equal(3);

  })




})


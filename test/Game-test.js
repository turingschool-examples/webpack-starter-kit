import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;


describe('Game', () => {
  it('Game can be an object', () =>{
    const game = new Game();
    expect(game).to.be.an('object');

  })

  it('Should have an array of players', () =>{
    const game = new Game();
    game.start();
    expect(game.players.length).to.equal(3);

  })

  it ('Should create new player objects', () => {
    const game = new Game();
    game.start(['mike', 'jill', 'megan']);
    expect(...game.players).to.be.an('object');
  }) 



})


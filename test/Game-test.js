import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, 'grabNames', () => true);
describe('Game', () => {
  it('Game can be an object', () =>{
    const game = new Game();
    expect(game).to.be.an('object');

  })

  it('Should have an array of players', () =>{
    const game = new Game();
    game.createPlayers(['mike', 'jill', 'megan']);
    expect(game.players.length).to.equal(3);

  })

  it ('Should create new player objects', () => {
    const game = new Game();
    game.createPlayers(['mike', 'jill', 'megan']);
    expect(...game.players).to.be.an('object');
  }) 

  it ('Should start intial game state', () => {
    const game = new Game();
    game.start();
    // game.createPlayers(['mike', 'jill', 'megan']);
    expect(game.round).to.be.an('object');
  })



})


import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';

describe('Game', function () {
  beforeEach(function() {
    chai.spy.on(domUpdates, 'updateNames', () => true);
  })
  afterEach(function() {
    chai.spy.restore(domUpdates);
  })
  it('should have an instance of Game', function () {
    let game = new Game;
  })
  it('should have an empty array for players names and clues', function () {
    let game = new Game;

    expect(game.players).to.deep.equal([]);
  
  })
  it('should take player information and create new players', function () {
    let game = new Game;

    game.createPlayers(['Saadrick Lamar']);
    expect(game.players).to.deep.equal([{ name: 'Saadrick Lamar', score: 0 }]);
  })
  // it('should start a game', function () {
  //   let game = new Game;

  //   game.startGame(['Saadrick Lamar']);
  //   expect(game.round).to.deep.equal({ categoryIds: [3, 4, 6, 2],



  //   });
  // })


})
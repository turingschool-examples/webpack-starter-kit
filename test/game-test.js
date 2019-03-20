import chai from 'chai';
import Game from '../src/js/game'
const expect = chai.expect;

describe('Game', () => {

  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should have an array of players', () => {
    expect(game.players).to.deep.equal([]);
  });

  it('should have a default round of 0', () => {
    expect(game.round).to.equal(0);
  });

  it('should have array of rounds 1-5', () => {
    expect(game.allRounds).to.have.lengthOf(5);
  });
  
});

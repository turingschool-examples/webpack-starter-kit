import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';

describe('Player', function() {
  it.skip('should be an instance of Player', function() {
    const player = new Player();
    expect(player).to.be.instanceof(Player);
  });
  describe('Properties', function() {
    it.skip('should have a name that is Player One by default', function() {
      const player = new Player();
      expect(player.name).to.equal('Player One');
    });
    it.skip('should have a name that is Player Two by default if there is already a Player One', function () {
      const player1 = new Player();
      const player2 = new Player();
      expect(player1.name).to.equal('Player One');
      expect(player2.name).to.equal('Player Two');
    });
    it.skip('should be able to take a name as an argument', function() {
      const player = new Player('Steve');
      expect(player.name).to.equal('Steve');
    });
    it.skip('should have a score that defaults to 0', function() {
      const player = new Player();
      expect(player.score).to.equal(0);
    });
    it.skip('should have a isTurn property', function() {
      const player = new Player();
      expect(player).to.have.property('isTurn');
    });
    it.skip('should have a isTurn property that defaults to false', function() {
      const player = new Player();
      expect(player.isTurn).to.be.false;
    });
  });
  describe('Methods', function() {
    it.skip('should be able to make a guess', function() {
      const player = new Player();
      expect(player).to.respondTo('makeGuess');
    });
    it.skip('should only accept strings in a guess', function() {
      const player = new Player();
      expect(player.makeGuess(10)).to.equal('Error: Argument Not String');
      expect(player.makeGuess(true)).to.equal('Error: Argument Not String');
      expect(player.makeGuess([1,2])).to.equal('Error: Argument Not String');
      expect(player.makeGuess({name: 'Ryan'})).to.equal('Error: Argument Not String');
      expect(player.makeGuess('hi')).to.not.equal('Error: Argument Not String');
    });
  });
});
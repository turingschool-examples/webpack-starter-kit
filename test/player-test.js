import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';

describe('Player', function() {
  it('should be an instance of Player', function() {
    const player = new Player();
    expect(player).to.be.instanceof(Player);
  });
  describe('Properties', function() {
    it('should have a name that is null by default', function() {
      const player = new Player();
      expect(player.name).to.be.null;
    });
    it('should be able to take a name as an argument', function() {
      const player = new Player('Steve');
      expect(player.name).to.equal('Steve');
    });
    it('should have a score that defaults to 0', function() {
      const player = new Player();
      expect(player.score).to.equal(0);
    });
    it('should have a isTurn property', function() {
      const player = new Player();
      expect(player).to.have.property('isTurn');
    });
    it('should have a isTurn property that defaults to false', function() {
      const player = new Player();
      expect(player.isTurn).to.be.false;
    });
  });
  describe('Methods', function() {
    it('should be able to make a guess', function() {
      const player = new Player();
      expect(player).to.respondTo('makeGuess');
    });
    it('should only accept strings in a guess', function() {
      const player = new Player();
      expect(player.makeGuess(10)).to.equal('Error: Argument Not String');
      expect(player.makeGuess(true)).to.equal('Error: Argument Not String');
      expect(player.makeGuess([1,2])).to.equal('Error: Argument Not String');
      expect(player.makeGuess({name: 'Ryan'})).to.equal('Error: Argument Not String');
      expect(player.makeGuess('hi')).to.not.equal('Error: Argument Not String');
    });
  });
});
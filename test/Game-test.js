import chai from 'chai';
import Game from '../src/Game.js';

const expect = chai.expect;

describe('see if the tests are running', function() {
	it('should return true', function() {
		expect(true).to.equal(true);
	});

	it('should set defaults', function() {
		let game = new Game(1, 1, 0);

		expect(game.round).to.equal(1);
		expect(game.dailyDoubles).to.equal(1);
		expect(game.cardsClicked).to.equal(0);
	});
});
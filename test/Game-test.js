import chai from 'chai';
import Game from '../src/Game.js';
import gameData from '../src/data.js';
const expect = chai.expect;

describe('Game', function() {
	it('Should have access to the data structures', function() {
		let myGame = new Game();
		expect(myGame.game).to.equal(gameData);
	})
	it('Should randomly splice a survey question and return the question as a string', function() {
		let myGame = new Game();
		expect(myGame.startGame()).to.be.a('String');
	})
	it('Source gameData object array\'s should not be mutated', function() {
		expect(gameData.surveys.length).to.equal(15);
		expect(gameData.answers.length).to.equal(45);
	})
})

// describe('Game', function() {
//   it('should swap players turn', function() {
//     let game = new Game();
//     expect(game.currentTurn).to.equal('p1');
//     game.whoseTurn();
//     expect(game.currentTurn).to.equal('p2');
//     game.whoseTurn();
//     expect(game.currentTurn).to.equal('p1');
//   });
// });
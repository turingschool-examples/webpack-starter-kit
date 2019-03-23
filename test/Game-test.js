import chai from 'chai';
import Game from '../src/Game.js';
import gameData from '../src/data.js';
const expect = chai.expect;

describe('Game', function() {
	it('Should have access to the data structures', function() {
		let myGame = new Game();
		expect(myGame.game).to.equal(gameData);
	})
	// it('Should copy the data structures', function() {
	// 	let game = new Game();
	// 	expect(game).to.equal(true);
	// })
	// it('Should remove a survey question at random from original array', function() {

	// })
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
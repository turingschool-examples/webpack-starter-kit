import chai from 'chai';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import gameData from '../src/data.js';
import $ from 'jQuery';
const expect = chai.expect;

describe('Game', function() {
	it('Should initiate with player1s turn', function(){
	let game = new Game();
	expect(game.currentTurn).to.equal('player1');
	})

	it('Should swap turns', function() {
	let game = new Game();
	game.whoseTurn();
	expect(game.currentTurn).to.equal('player1');
	game.whoseTurn();
	expect(game.currentTurn).to.equal('player2');
	game.whoseTurn();
	expect(game.currentTurn).to.equal('player1');
	})

	it('Should have an answer array with length', function() {
	let game = new Game();
	game.startGame();
	expect(game.currentAnswer.length).to.equal(3);
	})

	it('Source gameData object array\'s should not be mutated', function() {
	expect(gameData.surveys.length).to.equal(15);
	expect(gameData.answers.length).to.equal(45);
	})
});
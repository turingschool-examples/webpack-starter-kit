import chai from 'chai';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import gameData from '../src/data.js';
import $ from 'jQuery';
const expect = chai.expect;

describe('Game', function() {
	it('Should initiate with the round as 1', function(){
		let game = new Game();
		expect(game.currentRound).to.equal(1);
	})

	it('Should initiate with an empty currentAnswers Array', function(){
		let game = new Game();
		expect(game.currentAnswers.length).to.equal(0);
	})
	
	it('Should initiate with player1s turn', function(){
		let game = new Game();
		expect(game.currentPlayerTurn).to.equal('player1');
	})

	it('Should defualt to a cycleTurn value of true', function(){
		let game = new Game();
		expect(game.cycleTurn).to.equal(true);
	})

	it('Should populate currentAnswer when startGame is called', function(){
		let game = new Game();
		game.startGame();
		expect(game.currentAnswers.length).to.equal(3);
	})

	it('Should increment rounds when startNextRound is called', function(){
		let game = new Game();
		game.startNextRound();
		expect(game.currentRound).to.equal(2);
	})

	it('Should swap turns', function() {
		let game = new Game();
		game.whoseTurn();
		expect(game.currentPlayerTurn).to.equal('player1');
		game.whoseTurn();
		expect(game.currentPlayerTurn).to.equal('player2');
		game.whoseTurn();
		expect(game.currentPlayerTurn).to.equal('player1');
	})

	it('Should have an answer array with length', function() {
		let game = new Game();
		game.startGame();
		expect(game.currentAnswers.length).to.equal(3);
	})

	it('Source gameData object array\'s should not be mutated', function() {
		expect(gameData.surveys.length).to.equal(15);
		expect(gameData.answers.length).to.equal(45);
	})

	it('Should multiply ')
});
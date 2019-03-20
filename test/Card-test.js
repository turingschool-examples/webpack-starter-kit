import chai from 'chai';
import Card from '../src/Card.js';

const expect = chai.expect;

describe('see if the tests are running', function() {
	it('should return true', function() {
		expect(true).to.equal(true);
	});

	it('should have a category', function() {
		let card = new Card('unitedStatesHistory');

		expect(card.category).to.equal('unitedStatesHistory');
	});

	it('should have question', function() {
		let card = new Card('Food', 'I have a question?');

		expect(card.question).to.equal('I have a question?');
	});

	it('should have an answer', function() {
		let card = new Card ('Food', 'I have a question?', 'I have an answer!');

		expect(card.answer).to.equal('I have an answer!');
	});

	it('should have a point value', function() {
		let card = new Card ('Food', 'I have a question?', 'I have an answer!', 100); 

		expect(card.pointValue).to.equal(100);
	});

	it('should default to not a daily double', function() {
		let card = new Card ();

		expect(card.isDailyDouble).to.equal(false);
	});
});
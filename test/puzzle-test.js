import chai from 'chai';
import Puzzle from '../src/Puzzle.js';
import data from '../src/data.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);

// chai.spy.on(domUpdates, 'showCurrentPlayer', () => true);
// chai.spy.on(domUpdates, 'startGame', () => true);
// chai.spy.on(domUpdates, 'changeNames', () => true);
// chai.spy.on(domUpdates, 'changeCategory', () => true);
// chai.spy.on(domUpdates, 'changeClue', () => true);
// chai.spy.on(domUpdates, 'checkLetterGuess', () => true);
// chai.spy.on(domUpdates, 'checkAnswerBoard', () => true);
// chai.spy.on(domUpdates, 'toggleSpin', () => true);
// chai.spy.on(domUpdates, 'resetNames', () => true);
// chai.spy.on(domUpdates, 'resetLetters', () => true);
// chai.spy.on(domUpdates, 'resetInputs', () => true);
// chai.spy.on(domUpdates, 'appendGuessCard', () => true);

const expect = chai.expect;

describe('Puzzle', function(){
    let puzzle;
    beforeEach(function (){
        puzzle = new Puzzle();
    });
    it('should be an instance of puzzle', function (){
        expect(puzzle).to.be.an.instanceOf(Puzzle);
    })
})
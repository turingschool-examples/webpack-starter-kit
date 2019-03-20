import chai from 'chai';
const expect = chai.expect;
import Puzzle from '../src/puzzle.js';
import spies from 'chai-spies';
chai.use(spies);

describe('Puzzle', () => {
    it('Should be a function', ()=>{
        expect(Puzzle).to.be.a('function');
    })
    it('Should instantiate a new object puzzle', ()=>{
        const puzzle = new Puzzle();
        expect(puzzle).to.be.an('object');
    })
    // Should be able to have property values passed in from a data set
    it('Properties should have a value when passed in', ()=>{
        const puzzle = new Puzzle('Around The House', 1, 6, 6, 'Location or object(s) found within a typical house.', 'Teapot');
        expect(puzzle.cat).to.equal('Around The House');
        expect(puzzle.numOfWords).to.equal(1);
        expect(puzzle.numOfLtr).to.equal(6);
        expect(puzzle.numLtrFirstWord).to.equal(6);
        expect(puzzle.description).to.equal('Location or object(s) found within a typical house.');
        expect(puzzle.ans).to.equal('Teapot');
    })
})
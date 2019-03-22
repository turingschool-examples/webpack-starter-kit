import chai from 'chai';
const expect = chai.expect;
import Round from '../src/round.js';
import data from '../src/data_wheel-of-fortune.js';
import Puzzle from '../src/puzzle.js';

import spies from 'chai-spies';
chai.use(spies);


describe('Round', ()=>{
    it('Should be a function', ()=>{
        expect(Round).to.be.a('function');
    })
    it('Should instanciate a new instance of Round', ()=>{
        const round = new Round();
        expect(round).to.be.a('object');
    })
    it('Should instanciate a new instance of Puzzle', ()=>{
        const puzzle = new Puzzle();
        expect(puzzle).to.be.a('object');
    })
    it('Should have a property roundNumber that can have a value passed in', ()=>{
        const round = new Round(1);
        expect(round.roundNumber).to.equal(1);
    })
    it('', ()=>{
        const puzzle = new Puzzle('Around The House', 1, 6, 6, 'Location or object(s) found within a typical house.', 'Teapot');
        const round = new Round(1);
        expect(round).to.deep.equal({roundNumber: 1})
    })
})
export default Round;
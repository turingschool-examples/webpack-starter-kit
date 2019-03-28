import chai from 'chai';
import Puzzle from '../src/Puzzle.js';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;

describe('Puzzle', function(){
    let puzzle;
    beforeEach(function (){
        puzzle = new Puzzle();
    });
    it('should be an instance of puzzle', function (){
        expect(puzzle).to.be.an.instanceOf(Puzzle);
    });
})
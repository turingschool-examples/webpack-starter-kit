import chai from 'chai';
const expect = chai.expect;
import Puzzle from '../src/puzzle.js';
import Round from '../src/round.js';
import data from '../src/data_wheel-of-fortune';
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
    it('Properties should have a value when passed in', ()=>{
        let puzzleData = data.puzzles.one_word_answers.puzzle_bank[0];
        const puzzle = new Puzzle(puzzleData.category, puzzleData.number_of_words, puzzleData.total_number_of_letters, puzzleData.first_word, puzzleData.description, puzzleData.correct_answer);
        expect(puzzle.cat).to.equal('Around The House');
        expect(puzzle.numOfWords).to.equal(1);
        expect(puzzle.numOfLtr).to.equal(8);
        expect(puzzle.numLtrFirstWord).to.equal(8);
        expect(puzzle.description).to.equal('Location or object(s) found within a typical house.');
        expect(puzzle.ans).to.equal('Armchair');
    })
})
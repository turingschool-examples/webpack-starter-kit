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
    it('Should instantiate a new instance of puzzle in the propery puzzle of round when getPuzzle() is invoked', ()=>{
        const round = new Round(1);
        let puzzleData = data.puzzles.one_word_answers.puzzle_bank[0];
        round.getPuzzle(puzzleData.category, puzzleData.number_of_words, puzzleData.total_number_of_letters, puzzleData.first_word, puzzleData.description, puzzleData.correct_answer);
        expect(round.puzzle.cat).to.equal('Around The House');
        expect(round.puzzle.numOfWords).to.equal(1);
        expect(round.puzzle.numOfLtr).to.equal(8);
        expect(round.puzzle.numLtrFirstWord).to.equal(8);
        expect(round.puzzle.description).to.equal('Location or object(s) found within a typical house.');
        expect(round.puzzle.ans).to.equal('Armchair');
    })
})
export default Round;
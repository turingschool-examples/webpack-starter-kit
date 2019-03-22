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
    it('Should have a different roundPuzzle' , ()=>{
        const round1 = new Round(1);
        round1.determinePuzzleLength();
        const round2 = new Round(1);
        round2.determinePuzzleLength();
        expect(round1.roundPuzzle).to.not.equal(round2.roundpuzzle);
    })
    it('Should instantiate a new instance of puzzle in the propery puzzle of round when getPuzzle() is invoked', ()=>{
        const round = new Round(1);
        let puzzleBank = data.puzzles.one_word_answers.puzzle_bank[0];
        round.getPuzzle(puzzleBank.category, puzzleBank.number_of_words, puzzleBank.total_number_of_letters, puzzleBank.first_word, puzzleBank.description, puzzleBank.correct_answer);
        expect(round.roundPuzzle.cat).to.equal('Around The House');
        expect(round.roundPuzzle.numOfWords).to.equal(1);
        expect(round.roundPuzzle.numOfLtr).to.equal(8);
        expect(round.roundPuzzle.numLtrFirstWord).to.equal(8);
        expect(round.roundPuzzle.description).to.equal('Location or object(s) found within a typical house.');
        expect(round.roundPuzzle.ans).to.equal('Armchair');
    })
    // it('', ()=>{
    //     const round = new Round(1);
    //     let puzzleBank = data.puzzles.one_word_answers.puzzle_bank[Math.floor(Math.random() * 23)+1];
    //     round.getPuzzle(puzzleBank.category, puzzleBank.number_of_words, puzzleBank.total_number_of_letters, puzzleBank.first_word, puzzleBank.description, puzzleBank.correct_answer);
    //     console.log(puzzleBank)
    //     expect(round.roundPuzzle.cat).to.equal('Around The House');
    //     expect(round.roundPuzzle.numOfWords).to.equal(1);
    //     expect(round.roundPuzzle.numOfLtr).to.equal(8);
    //     expect(round.roundPuzzle.numLtrFirstWord).to.equal(8);
    //     expect(round.roundPuzzle.description).to.equal('Location or object(s) found within a typical house.');
    //     expect(round.roundPuzzle.ans).to.equal('Armchair');
    // })
   
})
export default Round;
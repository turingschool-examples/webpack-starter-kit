import Game from "../src/Game";
import Round from "../src/Round.js";
import Puzzle from "../src/Puzzle.js";
import Player from "../src/Player.js";
import data from "../src/data.js";
import chai from 'chai'
import spies from 'chai-spies';
import { create } from "domain";

chai.use(spies);
const expect = chai.expect;

describe('Puzzle', () => {
  let puzzle;
  beforeEach(() => {
    puzzle = new Puzzle(data.puzzles.one_word_answers.puzzle_bank[2]);
  });
  it('should be an instance of Puzzle', () => {
    expect(puzzle).to.be.an.instanceof(Puzzle);
  });

  it('should have default properties', () => {
    expect(puzzle.category).to.equal('The 90s');
    expect(puzzle.correctAnswer).to.equal('Tamagotchi');
    expect(puzzle.description).to.equal('Puzzles pertaining to the decade in question.');
    expect(puzzle.totalLetters).to.equal(10);
    expect(puzzle.numWords).to.equal(1);
  });

  it('should be able to check puzzle length', () =>  {
    expect(puzzle.checkPuzLength).to.be.a('function');
    expect(puzzle.twoLinePuzzle).to.be.a('function');
    
  });
  
  it('should be able to split long puzzles into two lines', () => {

    puzzle.checkPuzLength()

    expect(puzzle.secondLine).to.equal(null);
    
    let longPuzzle = new Puzzle(data.puzzles.four_word_answers.puzzle_bank[2]);
    
    longPuzzle.checkPuzLength()
    
    expect(longPuzzle.splitAnswer).to.deep.equal(['T', 'H', 'E', ' ', 'M', 'I', 'C', 'K', 'E', 'Y']);
    expect(longPuzzle.secondLine).to.deep.equal(['M', 'O', 'U', 'S', 'E', ' ', 'C', 'L', 'U', 'B']);
  })

  
});


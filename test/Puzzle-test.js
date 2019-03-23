import Game from "../src/Game";
import Round from "../src/Round.js";
import Puzzle from "../src/Puzzle.js";
import Player from "../src/Player.js";
import chai from 'chai'
import spies from 'chai-spies';
import { create } from "domain";

chai.use(spies);
const expect = chai.expect;

describe('Puzzle', () => {
  let puzzle;
  beforeEach(() => {
    puzzle = new Puzzle();
  });
  it('should be an instance of Puzzle', () => {
    expect(puzzle).to.be.an.instanceof(Puzzle);
  });

  it('should have default properties', () => {
    expect(puzzle.category).to.equal(null);
    expect(puzzle.correctAnswer).to.equal(null);
    expect(puzzle.description).to.equal(null);
    expect(puzzle.totalLetters).to.equal(null);
    expect(puzzle.numWords).to.equal(null);

  });

  
});


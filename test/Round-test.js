import Game from "../src/Game";
import Wheel from "../src/Wheel.js";
import Round from "../src/Round.js";
import Player from "../src/Player.js";
import Puzzle from "../src/Puzzle.js";
import data from "../src/data.js";
import domUpdates from "../src/domUpdates.js";
import $ from 'jquery';
import chai from 'chai'
import spies from 'chai-spies';
import { create } from "domain";
chai.use(spies);
const expect = chai.expect;


describe('Round', () => {
  let round;
  beforeEach(() => {
    round = new Round();
  });
  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have default properties', () => {
    expect(round.players).to.deep.equal([]);
    
  });

  it('should be able to get a select a single random puzzle', ()=> {
    expect(round.getPuzzle).to.be.a('function');
  });

  
});


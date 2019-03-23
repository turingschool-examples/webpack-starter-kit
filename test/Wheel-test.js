import Game from "../src/Game";
import Wheel from "../src/Wheel.js";
import Player from "../src/Player.js";
import Puzzle from "../src/Puzzle.js";
import data from "../src/data.js";

import chai from 'chai'
import spies from 'chai-spies';
import { create } from "domain";
chai.use(spies);
const expect = chai.expect;


describe('Wheel', () => {
  let wheel;
  beforeEach(() => {
    wheel = new Wheel();
  });
  it('should be an instance of Wheel', () => {
    expect(wheel).to.be.an.instanceof(Wheel);
  });

  it('should have default properties', () => {
    expect(wheel.values).to.deep.equal([]);
    expect(wheel.currentSpin).to.equal(null);
    expect(wheel.currentIndex).to.equal(null);

  });

});


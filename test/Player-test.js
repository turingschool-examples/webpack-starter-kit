
import Player from "../src/Player.js";
import Puzzle from "../src/Puzzle.js";
import chai from 'chai'
import spies from 'chai-spies';
import { create } from "domain";
chai.use(spies);
const expect = chai.expect;



describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player("Bob");
  });
  it('should be an instance of Player', () => {
    expect(player).to.be.an.instanceof(Player);
  });

  it('should have default properties', () => {
    expect(player.name).to.deep.equal("Bob");
    expect(player.totalScore).to.equal(0);
    expect(player.roundScore).to.equal(0);
    
  });

});


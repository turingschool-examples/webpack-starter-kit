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
// describe Game
// gets called and can be instantiated
// it should ....have a bank, round players, current player, all data

//object or array need to deep equal


//this.players to deepequal []


// start game() is method...be able to start a new game check to see it's taking in 

// 
//
// get random data()
//
describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have default properties', () => {
    expect(game.bank).to.deep.equal([]);
    expect(game.players).to.deep.equal([]);
    expect(game.allData).to.deep.equal([]);
    expect(game.round).to.equal(0);
    expect(game.currentPlayer).to.equal(0);
  });

  it('should be able to get a random puzzle', ()=> {
    expect(game.startGame).to.be.a('function');
    expect(game.getRandomData).to.be.a('function');
    expect(game.getRandomData).to.be.a('function');
  });

  it('should be able to start a new round', () => {
    expect(game.createRound).to.be.a('function');
    expect(game.createPlayers).to.be.a('function');
  })
});


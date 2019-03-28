import chai from 'chai';
const expect = chai.expect;
import GameEngine from '../src/game-engine.js';
import spies from 'chai-spies';
chai.use(spies);

describe('GameEngine', ()=>{
  it('Should be a function', ()=>{
    expect(GameEngine).to.be.a('function');
  })
  it('Should instantiate a new instance of GameEngine', ()=>{
    let gameEngine = new GameEngine();
    expect(gameEngine).to.be.an('object');
  })
  it('Should instantiate a new instance of round within the currentRound properties', ()=>{
    let gameEngine = new GameEngine();
    expect(gameEngine.currentRound).to.be.an('object');
  })
})

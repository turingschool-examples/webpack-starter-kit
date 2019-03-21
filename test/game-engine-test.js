import chai from 'chai';
const expect = chai.expect;
import GameEngine from '../src/game-engine.js';

import spies from 'chai-spies';
chai.use(spies);
describe('GameEngine', ()=>{
    it('Should be a function', ()=>{
        expect(GameEngine).to.be.a('function');
    })
    it('Should instanciate a new instance of GameEngine', ()=>{
        let gameEngine = new GameEngine();
        expect(gameEngine).to.be.an('object');
    })

    // methods
    it('getPuzzle should be a function', ()=>{
        const gameEngine = new GameEngine();
        expect(gameEngine.getPuzzle).to.be.an('function');
    })
})

import chai from 'chai';
const expect = chai.expect;
import GameEngine from '../src/game-engine.js';
import Round from '../src/round.js'

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
    it('Should instantiate a new round when the revEngine() method is invoked', ()=>{
        let gameEngine = new GameEngine();
        expect(gameEngine.round).to.equal(undefined);
        // gameEngine.revEngine
        gameEngine.revEngine();
        // expect(gameEngine.rounds[0]).to.equal([1,2,3,4,5]);

    })
    
})

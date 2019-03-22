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
    it('Should increase currentRound by 1 everytime that gameEngine() is invoked', ()=>{
        let gameEngine = new GameEngine();
        expect(gameEngine.currentRound.roundNumber).to.equal(0);
        gameEngine.newRound();
        gameEngine.newRound();
        expect(gameEngine.currentRound.roundNumber).to.equal(2);
    })
})

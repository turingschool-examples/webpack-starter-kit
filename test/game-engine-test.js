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
    it('Should increase currentRound by 1 everytime that gameEngine() is invoked', ()=>{
        let gameEngine = new GameEngine();
        expect(gameEngine.currentRound.roundNumber).to.equal(0);
        gameEngine.newRound();
        gameEngine.newRound();
        expect(gameEngine.currentRound.roundNumber).to.equal(2);
    })
    it('Should instantiate a new instance of round within the currentRound properties', ()=>{
        let gameEngine = new GameEngine();
        expect(gameEngine.currentRound).to.be.an('object');
    })
    it('Should have the number of words in the puzzle be the same as the current round, except round five should be 1', ()=>{
        let gameEngine = new GameEngine();
        gameEngine.newRound();
        gameEngine.currentRound.determinePuzzleLength();
        expect(gameEngine.currentRound.roundPuzzle.numOfWords).to.deep.equal(1);       
        gameEngine.newRound();
        gameEngine.currentRound.determinePuzzleLength();
        expect(gameEngine.currentRound.roundPuzzle.numOfWords).to.deep.equal(2);       
        gameEngine.newRound();
        gameEngine.currentRound.determinePuzzleLength();
        expect(gameEngine.currentRound.roundPuzzle.numOfWords).to.deep.equal(3);       
        gameEngine.newRound();
        gameEngine.currentRound.determinePuzzleLength();
        expect(gameEngine.currentRound.roundPuzzle.numOfWords).to.deep.equal(4);  
        gameEngine.newRound();
        gameEngine.currentRound.determinePuzzleLength();
        expect(gameEngine.currentRound.roundPuzzle.numOfWords).to.deep.equal(1);       
    })
})

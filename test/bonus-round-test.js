import chai from 'chai';
const expect = chai.expect;
import BonusRound from '../src/bonus-round.js';
import Puzzle from '../src/puzzle.js'

import spies from 'chai-spies';
chai.use(spies);

describe('BonusRound', ()=>{
    it('Should be a function', ()=>{
        expect(BonusRound).to.be.a('function');
    })
    it('Should instanciate a new instance of BonusRound', ()=>{
        const bonusRound =  new BonusRound();
        expect(bonusRound).to.be.an('object');
    })
    it('Should extend class Round', ()=>{
        const puzzle = new Puzzle('Around The House', 1, 6, 6, 'Location or object(s) found within a typical house.', 'Teapot');
        const bonusRound = new BonusRound(1, puzzle.ans, puzzle.numOfLtr);
        expect(bonusRound).to.deep.equal({ roundNumber: 1, puzzle: 'Teapot', ltrs: 6 })
    })
})
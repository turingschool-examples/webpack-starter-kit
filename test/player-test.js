import chai from 'chai';
const expect = chai.expect;
import Player from '../src/player.js';

import spies from 'chai-spies';
chai.use(spies);

describe('Player', ()=>{
    it('Should be a function', ()=>{
        expect(Player).to.be.a('function');
    })
    it('Should instanciate a new object', ()=>{
        const player = new Player();
        expect(player).to.be.a('object')
    })
    it('Should have default property values & be able to have a name passed in', ()=>{
        const player = new Player('Max');
        expect(player.name).to.equal('Max');
        expect(player.roundCaps).to.equal(0);
        expect(player.totalCaps).to.equal(0);
    })
})
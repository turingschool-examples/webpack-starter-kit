import chai from 'chai';
import Round from '../src/Round.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

describe ('Round', () => {
    it ('Round should be an object', () => {
        const round = new Round();
        expect(round).to.be.an('object');
    })
})
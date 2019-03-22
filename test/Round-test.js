import chai from 'chai'
const expect = chai.expect;

import Round from '../src/Round.js'

describe ('Round', function() {
    let round;
    beforeEach(function() {
        round = new Round(); 
    });

    it('should have default properties', function () {
        expect(round.clues).to.deep.equal(round.clues, []);
        expect(round.currentPlayer).to.deep.equal(round.currentPlayer, {});
    })
})
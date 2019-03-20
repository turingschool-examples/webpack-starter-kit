import chai from 'chai'
const expect = chai.expect;

import Round from '../src/Round.js'

describe ('Round', function() {
    let round;
    beforeEach(function() {
        round = new Round(); 
    });

    it('should have clues', function () {
        expect(round.clues).to.deep.equal(round.clues, []); 
    })

    it('should be currentPlayer in round', function() {
        expect(round.currentPlayer).to.deep.equal(round.currentPlayer, {});
    })
})
import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import BonusWheel from '../src/scripts/bonusWheel.js';
import domUpdates from '../src/scripts/domUpdates.js';

describe('Testing bonusWheel methods and properties', function() {
    var bonusWheel;

    beforeEach(function () {
        bonusWheel = new BonusWheel();
    });
    
    afterEach(function() {
        chai.spy.restore(domUpdates);
    });

    it('should have correct default properties', function() {
        expect(bonusWheel.increasedCoins).to.equal(0);
    });

});
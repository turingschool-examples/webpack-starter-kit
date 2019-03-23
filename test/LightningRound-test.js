import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import LightningRound from '../src/LightningRound.js';
import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'functionName', () => );

const assert = chai.assert;


describe('LightningRound', function() {
  it('is a function', () => {

    assert.isFunction(LightningRound);
  });

  it('starts a lightning round', () => {
    let lightningRound = new LightningRound();

    assert.instanceOf(lightningRound, LightningRound);
  });

  it('should have a multiplier', () => {
    let lightningRound = new LightningRound(1, 'question', 2);

    assert.equal(lightningRound.multiplier, 2);
  });

})
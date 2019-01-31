import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, 'toggleSplash', () => true);

describe('domUpdates', function() {
  it('should hide splash screen', function() {
    domUpdates.toggleSplash();

    expect(domUpdates.toggleSplash).to.be.called(1);
  });
});
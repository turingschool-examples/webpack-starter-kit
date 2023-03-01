import {expect} from 'chai'
import Customer from '../src/classes/Customer.js';

describe('Customer tests', function() {
  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });
});
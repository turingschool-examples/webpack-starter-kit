import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';

describe("Hotel", () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel;
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a("function")
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel)
  });
});

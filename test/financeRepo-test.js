import chai from 'chai';
const expect = chai.expect;
import FinanceRepo from '../src/FinanceRepo.js';
import bookingData from '../data/bookingData.js';
import roomServiceData from '../data/roomServiceData.js';
import roomData from '../data/roomData.js';


describe('FinanceRepo', function () {
  let financeRepo;

  beforeEach(function () {
    financeRepo = new FinanceRepo(roomData, bookingData, roomServiceData);
  });

  it('Should have default properties', function () {
    expect(financeRepo.bookingData.bookings.length).to.equal(200);
    expect(financeRepo.roomData.rooms.length).to.equal(200);
    expect(financeRepo.roomServiceData.roomServices.length).to.equal(100);
  });

  it('Should be able to return the total money made on a given date', function () {
    expect(financeRepo.returnTotalEarned('22/10/2019')).to.equal(449.25);
  });
});
import {expect} from 'chai'
import BookingRepo from '../src/classes/BookingRepo.js';
import Booking from '../src/classes/Booking.js';
import bookingsSample from '../src/data/bookings-sample.js';
import roomsSample from '../src/data/rooms-sample.js';

describe('BookingRepo tests', () => {
  let bookingRepo;

  beforeEach('instatiate BookingRepo', () => {
    bookingRepo = new BookingRepo(bookingsSample);
  });

  it('should be a function', () => {
    expect(BookingRepo).to.be.a('function');
  });
  
  it('should be an instance of BookingRep', () => {
    expect(bookingRepo).to.be.an.instanceOf(BookingRepo);
  });

  it('should have bookings that are instances of Booking', () => {
    const booking1 = {
      id: '5fwrgu4i7k55hl6t8',
      userID: 1,
      date: '2022/02/05',
      roomNumber: 12
    };

    const booking4 = {
      id: '5fwrgu4i7k55hl6v3',
      userID: 3,
      date: '2022/02/07',
      roomNumber: 23
    };
    
    expect(bookingRepo.bookings[0]).to.deep.equal(booking1);
    expect(bookingRepo.bookings[0]).to.be.an.instanceOf(Booking);
    expect(bookingRepo.bookings[3]).to.deep.equal(booking4);
    expect(bookingRepo.bookings[3]).to.be.an.instanceOf(Booking);
  });

  it('should be able to get all vacant rooms on a given date', () => {
    const checkForRoom = (vacancies ,roomNum) => {
      return vacancies.some(room => room.number === roomNum);
    }
    
    const vacancies1 = bookingRepo.getVacancies('2023/01/08', roomsSample);
    const vacancies2 = bookingRepo.getVacancies('2022/01/11', roomsSample);
    const allVacant = bookingRepo.getVacancies('1900/11/11', roomsSample);

    const roomCheck1 = checkForRoom(vacancies1, 5)
    const roomCheck2 = checkForRoom(vacancies2, 4)
    
    expect(vacancies1.length).to.equal(9);
    expect(roomCheck1).to.equal(false);
    expect(vacancies2.length).to.equal(9);
    expect(roomCheck2).to.equal(false);
    expect(allVacant.length).to.equal(10);
  });

  it('should be able to convert a date with hyphens', () => {
    const checkForRoom = (vacancies ,roomNum) => {
      return vacancies.some(room => room.number === roomNum);
    }
    
    const vacancies1 = bookingRepo.getVacancies('2023-01-08', roomsSample);
    const vacancies2 = bookingRepo.getVacancies('2022-01-11', roomsSample);
    const allVacant = bookingRepo.getVacancies('1900-11-11', roomsSample);

    const roomCheck1 = checkForRoom(vacancies1, 5)
    const roomCheck2 = checkForRoom(vacancies2, 4)
    
    expect(vacancies1.length).to.equal(9);
    expect(roomCheck1).to.equal(false);
    expect(vacancies2.length).to.equal(9);
    expect(roomCheck2).to.equal(false);
    expect(allVacant.length).to.equal(10);
  });
});
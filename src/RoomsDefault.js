import domUpdates from './domUpdates.js';
// import MainRepo from './MainRepo';

class RoomsDefault {
  constructor(bookingsData, roomsData, date) {
    this.bookingsData = bookingsData;
    this.roomsData = roomsData;
    this.date = date;
  }

  noRoomsAvailable() {
    let allRoomsNumbers = this.roomsData.map(roomData => roomData.number)
    let roomsBooked = this.bookingsData.reduce((acc, booking) => {
      if (this.date === booking.date) {
        acc.push(booking.roomNumber)
      }
      return acc;
    }, []);
    let availableRooms = allRoomsNumbers.reduce((acc, roomNumber) => {
      if (!roomsBooked.includes(roomNumber)) {
        acc.push(roomNumber);
      }
      return acc;
    }, []);
    domUpdates.domNoRoomsAvailable(availableRooms.length);
    return availableRooms
  }

  percentageRoomsOccupied() {
    let roomsOccupied = ((this.roomsData.length - this.noRoomsAvailable().length) / this.roomsData.length) * 100
    domUpdates.domPercentageRoomsOccupied(roomsOccupied);
    return roomsOccupied;
  }

  bookingDatesBreakDown() {
    let allDates = this.bookingsData.reduce((acc, booking) => {
      acc.push(booking.date)
      return acc;
    }, []);

    let uniqueDates = this.bookingsData.reduce((acc, booking) => {
      if (!acc.includes(booking.date)) {
        acc.push(booking.date)
      }
      return acc;
    }, []);
    
    let dateRepeat = uniqueDates.reduce((acc, uDate) => {
      var x = 0;
      allDates.forEach(d => {
        if (d === uDate) {
          x++
        }
      })
      acc.push(x);
      return acc
    }, []);
    let max = Math.max(...dateRepeat);
    let min = Math.min(...dateRepeat);
    let output = {
      maxValue: max,
      minValue: min,
      dateRepeatValue: dateRepeat,
      uniqueDatesValue: uniqueDates
    }

    return output
  }

  mostPopularDay() {
    var obj = this.bookingDatesBreakDown();
    let maxDates = obj.dateRepeatValue.reduce((acc, d, i) => {
      if (d === obj.maxValue) {
        acc.push(obj.uniqueDatesValue[i]);
      }
      return acc;
    }, [])
    let output = {numOfDays: obj.maxValue, dates: maxDates};
    domUpdates.domMostPopularDay(output);
    return output
  }

  leastPopularDay() {
    var obj = this.bookingDatesBreakDown();
    let leastDates = obj.dateRepeatValue.reduce((acc, d, i) => {
      if (d === obj.minValue) {
        acc.push(obj.uniqueDatesValue[i]);
      }
      return acc;
    }, [])
    let output = {numOfDays: obj.minValue, dates: leastDates};
    domUpdates.domLeastPopularDay(output);
    return output
  }
}

export default RoomsDefault;
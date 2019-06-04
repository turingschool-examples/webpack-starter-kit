import domUpdates from './domUpdates.js';
// import MainRepo from './MainRepo';

class RoomsDefault {
  constructor(data, date) {
    this.data = data;
    // this.roomsData = roomsData;
    this.date = date;
    // console.log(this.data);

  }

  noRoomsAvailable() {
    let allRoomsNumbers = this.data.rooms.map(roomData => roomData.number)
    let roomsBooked = this.data.bookings.reduce((acc, booking) => {
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
    let roomsOccupied = ((this.data.rooms.length - this.noRoomsAvailable().length) / this.data.rooms.length) * 100
    domUpdates.domPercentageRoomsOccupied(roomsOccupied);
    return roomsOccupied;
  }

  bookingDatesBreakDown() {
    let allDates = this.data.bookings.reduce((acc, booking) => {
      acc.push(booking.date)
      return acc;
    }, []);

    let uniqueDates = this.data.bookings.reduce((acc, booking) => {
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
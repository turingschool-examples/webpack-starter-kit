import Booking from '../src/bookings'

class Room {
  constructor(data) {
    this.data = data;
  }

  findByNumber(num) {
    return this.data.find(dayObj => dayObj.number === num)
  }

  filterByType(type) {
    return this.data.filter(dayObj => dayObj.roomType === type)
  }

  availableByDate(date, data) {
    let booking = new Booking(data);
    let taken = booking.roomsTakenByDate(date)
    return this.data.reduce(function(acc, day) {
      let rooms = taken.find(item => item === day.number)
      rooms === undefined ? acc.push(day) : null;
      return acc
    }, [])
  }

  availableTypeByDate(date, type, data) {
    let booking = new Booking(data)
    let taken = booking.roomsTakenByDate(date)
    let rooms = this.filterByType(type)
    return rooms.reduce(function(acc, day) {
      let currentRoom = taken.find(item => item === day.number)
      currentRoom === undefined ? acc.push(day) : null;
      return acc
    }, [])
  }

  availableAlternate(date, type, data) {
    if (this.availableTypeByDate(date, type, data) !== []) {
      return this.availableTypeByDate(date, type, data)
    } else {
      return this.availableByDate(date, data)
    }
  }

  callBooking(date, data) {
    let booking = new Booking(data)
    return booking.roomsTakenByDate(date)
  }
}

export default Room;
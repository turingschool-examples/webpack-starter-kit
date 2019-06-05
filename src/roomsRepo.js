class RoomsRepo {
  constructor(data) {
    this.data = data;
  }

  findMostPopBookingDate() {
    const filterDates = this.data.bookings.bookings.reduce((totalDates, booking) => {
      totalDates[booking.date] = (totalDates[booking.date] || 0) + 1;
      return totalDates;
    }, {});
    const maxCount = Math.max(...Object.values(filterDates));
    return Object.keys(filterDates).filter(bookingDate => filterDates[bookingDate] === maxCount);
          
  }

  filterRoomType(type) {
   return this.data.rooms.rooms.filter(room => room.roomType === type)
  
  }

  findAvailableRooms(date) {
    const avail =  this.data.bookings.bookings.filter(room => {
      if (room.date !== date) {
        return room.roomNumber
      }
    })
    const num = avail.map(room => room.roomNumber)
    return num
  }

  filterRoomsByDate(date, type) {
    const filteredRoomsByDate = this.findAvailableRooms(date)
    const roomObjects = this.data.rooms.rooms.filter(room => !filteredRoomsByDate.includes(room.number));
    const total = roomObjects.filter(room => room.roomType === type)
    return total
  }

  addNewBooking(name, id, date) {
    const room = {
      name: name,
      roomNumber: id,
      date: date
    }
    const newReservation = this.data.bookings.bookings.push(room)
    return newReservation
  }


}

export default RoomsRepo
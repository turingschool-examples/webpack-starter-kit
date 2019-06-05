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
      if (room.date === date) {
        return room.roomNumber
      }
    })
    return avail
  }

  filterRoomByDate(date, type) {
    const filteredRooms = this.findAvailableRooms(date)
    return Object.values(this.data.rooms.rooms).filter(room => !filteredRooms.includes(room.number));
  }

}

export default RoomsRepo
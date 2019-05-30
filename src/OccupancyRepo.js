class OccupancyRepo {
  constructor(roomData, bookingData) {
    this.roomData = roomData;
    this.bookingData = bookingData;
    this.occupancyData = {};
  }

  assignOccupancyDataset() {
    this.occupancyData.occupancies = this.roomData.rooms.reduce((newDataset, room) => {
      this.bookingData.bookings.forEach(booking => {
        if (!room.datesBooked && booking.roomNumber === room.number) {
          room.datesBooked = [booking.date];
        } else if (room.datesBooked && booking.roomNumber === room.number) {
          room.datesBooked.push(booking.date);
        }
      });
    newDataset.push(room);
    return newDataset;
    }, []);
  }

  returnAvailableRooms(givenDate) {
    this.assignOccupancyDataset();
    return this.occupancyData.occupancies.reduce((final, room) => {
      if (room.datesBooked && !room.datesBooked.includes(givenDate)) {
        final.push(room);
      }
      return final;
    }, []);
  }

  returnPercentRoomsOccupied(givenDate) {
    const availableRooms = this.returnAvailableRooms(givenDate).length;
    const numberOfRooms = this.occupancyData.occupancies.length;
    return ((numberOfRooms - availableRooms) / numberOfRooms) * 100;
  }

  returnAvailableRoomsByType(givenDate, type) {
    const availRooms = this.returnAvailableRooms(givenDate);
    const availTypeRooms = availRooms.filter(room => room.roomType === type);
    return availTypeRooms !== undefined ? availTypeRooms : availRooms;
  }
  
  // returnMostAvailableDate() {
  //   this.assignOccupancyDataset();

  // }

}

export default OccupancyRepo;
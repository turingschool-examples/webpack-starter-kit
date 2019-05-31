import domUpdates from './domUpdates.js';

class RoomRepo {
  constructor(bookingsData, roomsData, date) {
    this.bookingsData = bookingsData;
    this.roomsData = roomsData;
    this.date = date;
  }

  roomsAvailable() {
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
    domUpdates.domRoomsAvailable(availableRooms.length);
    return availableRooms
  }

  percentageRoomsOccupied() {
    let roomsOccupied = ((this.roomsData.length - this.roomsAvailable().length) / this.roomsData.length) * 100
    domUpdates.domPercentageRoomsOccupied(roomsOccupied);
    return roomsOccupied;
  }
}

export default RoomRepo;
import domUpdates from "./domUpdates";

class RoomsRepo {
  constructor(data, today) {
    this.data = data;
    this.today = today;
  }

  roomsAvailable(fixedDate) {
    let date = fixedDate || this.today;
    let allRoomsNumbers = this.data.rooms.map(roomData => roomData.number)
    let roomsBooked = this.data.bookings.reduce((acc, booking) => {
      if (date === booking.date) {
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
    
    let rooms = availableRooms.reduce((acc, num) => {
      this.data.rooms.forEach(room => {
        if (room.number === num) {
          acc.push(room)
        }
      })
      return acc
    }, [])
    
    let finalRooms =  rooms.reduce((acc, room) => {
      if (!acc[room.roomType]) {
        acc[room.roomType] = 0;
      }
      acc[room.roomType]++
      return acc;
    }, {total: rooms.length})
    domUpdates.domRoomsAvailable(finalRooms);
    
    return { rooms: finalRooms, available: availableRooms };
  }
}

export default RoomsRepo;
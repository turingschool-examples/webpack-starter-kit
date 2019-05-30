class FinanceRepo {
  constructor(roomData, bookingData, roomServiceData) {
    this.roomData = roomData;
    this.bookingData = bookingData;
    this.roomServiceData = roomServiceData;
    this.financeData = {};
  }

  returnTotalRoomServiceEarned(givenDate) {
    const forThisDate = this.roomServiceData.roomServices.filter(service => service.date === givenDate);
    return forThisDate.reduce((sum, service) => {
      sum += service.totalCost;
      return sum;
    }, 0);
  }

  returnTotalRoomBookings(givenDate) {
    const bookingsForThisDate = this.bookingData.bookings.filter(booking => booking.date === givenDate);
    return bookingsForThisDate.reduce((sum, booking) => {
      this.roomData.rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          sum += room.costPerNight
        };
      });
      return sum;
    }, 0);
  }

  returnTotalEarned(givenDate) {
    const serviceTotal = this.returnTotalRoomServiceEarned(givenDate);
    const roomTotal = this.returnTotalRoomBookings(givenDate);
    return Math.round(100 * (serviceTotal + roomTotal)) / 100;
  }
}

export default FinanceRepo;
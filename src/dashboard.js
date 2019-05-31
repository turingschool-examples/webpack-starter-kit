class Dashboard {
  constructor(bookings, orders, rooms) {
    this.bookings = bookings;
    this.orders = orders;
    this.rooms = rooms;
  }

  findBookingDebt(date) {
    return this.bookings.filter(day => day.date === date).map(item => item.roomNumber)
  }

  findOrderDebt(date) {
    return this.orders.filter(day => day.date === date).reduce((a, b) => a + b.totalCost, 0)
  }

  findRoomDebt(date) {
    let dailyRooms = this.findBookingDebt(date)
    return dailyRooms.reduce((acc, roomNum) => {
      this.rooms.forEach(room => {
        room.number === roomNum ? acc += room.costPerNight : null;
      })
      return Number(acc.toFixed(2))
    }, 0)
  }

  totalDebtsByDay(date) {
    return this.findOrderDebt(date) + this.findRoomDebt(date)
  }
}

export default Dashboard;
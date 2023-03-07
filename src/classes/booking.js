
class Booking {
  constructor(hotelData) {
    this.hotelData = hotelData
    this.currentMonth
    this.currentDay
    this.currentYear
    this.roomType
    this.roomNum
    this.date
  }

  addZeros() {
    if (this.currentDay < 10) {
      this.currentDay = 0 + this.currentDay 
    }
    if (this.currentMonth < 10) {
      this.currentMonth = 0 + this.currentMonth 
    }
  }

  setDate() {
    this.date = `${this.currentYear}/${this.currentMonth}/${this.currentDay}`
  }

  filterRoomType() {
    return this.hotelData.rooms
      .filter(room => room.roomType === this.roomType.toLowerCase())
  }

  takenThatDay() {
    return this.hotelData.rooms.reduce((acc, room) => {
      this.hotelData.bookings.forEach(booking => {
        if (booking.date === this.date && booking.roomNumber === room.number) {
          acc.push(booking.roomNumber)
        }
      })
      return acc
    }, [])
  }

}


export default Booking
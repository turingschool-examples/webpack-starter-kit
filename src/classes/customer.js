class Customer {
    constructor(data, bookingData) {
        this.id = data.id
        this.name = data.name
        this.allBookings = bookingData
    }
    findAllBookings() {
        return this.allBookings.filter(booking => booking.userID === this.id)
    }
}

export default Customer
class Customer {
    constructor(data, bookingData) {
        this.id = data.id
        this.name = data.name
        this.allBookings = bookingData
        this.customersBookings
    }
    findAllBookings() {
        this.customersBookings = this.allBookings.filter(booking => booking.userID === this.id)
    }
    sortBookings() {
        this.customersBookings = this.customersBookings.sort((a, b) => {
            return new Date(a.date) - new Date(b.date)
        })
    }
}

export default Customer
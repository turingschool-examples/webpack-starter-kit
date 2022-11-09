class Customer {
    constructor(data, bookingData) {
        this.id = data.id
        this.name = data.name
        this.allBookings = bookingData
    }
}

export default Customer
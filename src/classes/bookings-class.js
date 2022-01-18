class Booking {
    constructor(booking) {
        this.id = booking.id;
        this.userID = booking.userID;
        this.date = booking.date.replaceAll('/', '-');
        this.roomNumber = booking.roomNumber;
        this.roomServiceCharges = [];
    }
}


export default Booking;

class Hotel {
    constructor(bookings, rooms, users) {
        this.rooms = rooms;
        this.bookings = bookings;
        this.customers = users;
        this.manager = {};
    }
}

export default Hotel;





// Is going to have access to all information 
// Will use subclasses/child classes to get the 
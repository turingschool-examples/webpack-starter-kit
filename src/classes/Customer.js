class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
  }

  getCustomerBookings(bookings) {
    return bookings.filter(booking => booking.userID === this.id);
  }

  getTotalCost(bookings, rooms) {
    let customerRooms = [];
    const customerBookings = this.getCustomerBookings(bookings);

    customerBookings.forEach(booking => {
      const customerRoom = (rooms.find(room => {
        return room.number === booking.roomNumber
      }));
      customerRooms.push(customerRoom);
    });

    return customerRooms.reduce((acc, room) => {
      acc += room.costPerNight;
      return acc;
    }, 0);
  }

  getRoomToBook(date, roomNumber) {
    if (date.includes('-')) {
      date = date.replace(/\-/g, '/');
    }
    
    return {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    }
  }
}

export default Customer;
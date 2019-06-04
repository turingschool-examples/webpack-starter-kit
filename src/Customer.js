import domUpdates from "../src/domUpdates";

class Customer {
  constructor(data, name) {
    this.data = data;
    this.name = name;
    this.id = this.returnCustomerId();
  }

  returnCustomerId() {
    return this.data.users.find(user => user.name === this.name).id
  }

  customerBookingHistory() {
    let bookings =  this.data.bookings.filter(booking => booking.userID === this.id);

    var bookingHistory =  bookings.reduce((acc, booking) => {

      this.data.rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          acc[room.roomType] = booking.date;
        }
      })
      return acc
    }, {})
    domUpdates.domCustomerBookingHistory(bookingHistory)

    return bookingHistory
  }

  customerServicesHistory() {
    let services = this.data.roomServices.filter(service => service.userID === this.id);

    let total = services.reduce((total, service) => {
      total += service.totalCost;
      return total
    }, 0)

    let serviceHistory = {serviceData: services, totalPrice: parseFloat(total.toFixed(2))};
    domUpdates.domCustomerServicesHistory(serviceHistory);
    return serviceHistory
  }


}
export default Customer;
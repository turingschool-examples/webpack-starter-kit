import Booking from "./bookings";

class Data {
  constructor() {
    this.bookingData;
    this.serviceData;
    this.roomData; 
    this.customerData; 
  }
  
  addCustomer(name) {
    let id = this.customerData.length + 1
    this.customerData.push({id, name})
  }
}

export default Data;
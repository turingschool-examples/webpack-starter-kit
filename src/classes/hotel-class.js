import { forEach, keys } from "../../test/booking-data";
import User from "./users-class";
import Booking from "./bookings-class";
import Room from "./rooms-class";

class Hotel {
    constructor(bookings, rooms, users) {
        this.rooms = rooms;
        this.bookings = bookings;
        this.customers = users;
        this.currentCustomer = undefined;
        this.manager = {};
        this.availableRooms = [];
        this.unavailable = [];
        this.selectedDate;
    }

    findCustomer(username, password) {
        if (password === "overlook2021"){
            const result = this.customers.find(customer => {
                if(username.includes(`${customer.id}`)){
                    return customer
                }
            })
            return result;
        }
    }

    setCurrentCustomer(user) {
        this.currentCustomer = new User(user);
    }

    listCustomerBookings() {
        const result = this.bookings.filter(booking => {
            if(booking.userID === this.currentCustomer.id){
                this.currentCustomer.bookings.push(booking);
            }
        })
        return result
    }

    calculateTotal() {
      const result = this.rooms.filter(room => {
            this.currentCustomer.bookings.forEach(booking => {
                if(room.number === booking.roomNumber){
                    this.currentCustomer.total += room.costPerNight
                }
            })
        })
        return result
    }

    findAvailableRooms(date) {
        this.selectedDate = date;
        this.availableRooms = [];
        this.unavailable = [];
        this.bookings.filter(booking => {
          if(booking.date.replaceAll('/', '-') === date.replaceAll('/', '-')) {
            console.log(booking.date, date)
              this.unavailable.push(booking.roomNumber);
          }
        })
        console.log(this.unavailable, date)
        const result = this.rooms.filter(room => {
          if(!this.unavailable.includes(room.number)){
            this.availableRooms.push(room)
          }
        })
        return result
    }

    filterRooms(types, date) {
      console.log(date)
      this.findAvailableRooms(date)
      const result = this.availableRooms.filter(room => {
        if(types.includes(room.roomType) && !this.unavailable.includes(room.number)){
          return room
        }
      })
      this.availableRooms = result

      return result
    }

    bookRoom(room) {
      let booking = new Booking(room)
      console.log(booking)
      this.bookings.push(booking);
      this.currentCustomer.bookings.push(booking);
      this.calculateTotal()
    }

}

export default Hotel;

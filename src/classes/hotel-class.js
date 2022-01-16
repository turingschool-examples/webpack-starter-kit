import User from "./users-class";

class Hotel {
    constructor(bookings, rooms, users) {
        this.rooms = rooms;
        this.bookings = bookings;
        this.customers = users;
        this.currentCustomer = undefined;
        this.manager = {};
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

}

export default Hotel;





// Is going to have access to all information 
// Will use subclasses/child classes to get the 
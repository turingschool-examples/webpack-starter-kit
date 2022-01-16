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
        console.log(user)
        this.currentCustomer = new User(user);
        console.log(this.currentCustomer)
    }

}

export default Hotel;





// Is going to have access to all information 
// Will use subclasses/child classes to get the 
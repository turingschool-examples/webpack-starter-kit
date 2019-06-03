import $ from 'jquery';

class Customers {
    constructor(data) {
        this.data = data;
        this.newGuests = [];
        this.currentGuest;
    }

    findGuestByName(name) {
        return this.data.users.users.find(item => item.name === name)
    }

    addNewGuest(firstName, lastName) {
       return this.newGuests.push({
           id: 1 + this.data.users.users.length++,
           name: `${firstName} ${lastName}`
        })
    }
}

export default Customers
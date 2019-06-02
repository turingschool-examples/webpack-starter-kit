import $ from 'jquery'

class Customers {
    constructor(data) {
        this.data = data;
        this.newGuests = [];
    }

    findGuestByName(name) {
        return this.data.users.users.find(item => item.name === name)
    }

    addNewGuest() {
       return this.newGuests.push({
           id: 1 + this.data.users.users.length++,
           name: $('#first-name-input').val() + ' ' + $('#last-name-input').val()
        })
    }
}

export default Customers
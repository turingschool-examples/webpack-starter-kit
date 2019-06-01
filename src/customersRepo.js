class Customers {
    constructor(data) {
        this.data = data;
        this.newGuests = [];
    }

    findGuestByName(name) {
        return this.data.users.users.find(item => item.name === name)
    }

    addNewGuest(name) {
       return this.newGuests.push({
            name: name,
            id: 1 + this.data.users.users.length++
        })
    }
}

export default Customers
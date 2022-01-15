class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.isCustomer = true;
        this.bookings = [];
    }
}


export default User;
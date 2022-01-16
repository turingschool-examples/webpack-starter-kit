class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.userName = `customer${user.id}`;
        this.password = "overlook2021"
        this.isCustomer = true;        
        this.bookings = [];
        this.total = 0;
    }
}


export default User;
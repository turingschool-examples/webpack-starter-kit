class Customer {
  constructor(id, name, customerSample) {
    this.id = id;
    this.name = name;
    this.customerSample = customerSample
  }
  getuserNames(name) {
    let usersCollection = this.customerSample.users
    usersCollection.forEach((user) => user.name)
  }

  searchCustomer() {

  }

  createCustomer() {

  }

  displayCustomer() {

  }
//   likely DOM updates:
// display customer name on top of page
// prompt to search or create customer
// select customer

}

export default Customer;
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
}

export default Customer;
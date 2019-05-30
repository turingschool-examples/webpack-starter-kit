class Customer {
  constructor(customerSample) {
    //   console.log(customerSample.users[0])
    this.id = customerSample.users.id;
    this.name = customerSample.users.name;
  }
}

export default Customer;
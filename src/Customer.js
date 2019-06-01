class Customer {
  constructor(name, id, allCustomers) {
    this.name = name;
    this.id = id || allCustomers;
  }
}
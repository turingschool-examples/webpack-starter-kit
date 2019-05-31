class CustomersRepo {
  constructor(customersData) {
    this.customersData = customersData;
    this.currentID = this.customersData.length + 1;
  }

  returnCustomerName(customerObject) {
    return customerObject.name;
  }

  addNewCustomer(customerName) {
    let newCustomer = {id: this.currentID, name: customerName};
    this.customersData.push(newCustomer);
    this.currentID++;
  }

  searchCustomerName(customerName) {
    let customerObject = this.customersData.find(customer => customer.name === customerName);
    return customerObject !== undefined ? customerObject.id : 'Customer does not exist';
  }
}

export default CustomersRepo;
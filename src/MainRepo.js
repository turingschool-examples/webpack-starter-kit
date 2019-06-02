import domUpdates from "./domUpdates";

class MainRepo {
  constructor(sData) {
    this.customersData = sData.users;
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

  searchCustomerName(search) {
    // let customerObject = this.customersData.find(customer => customer.name === customerName);
    // var output = customerObject !== undefined ? customerObject.id : 'Customer does not exist';
    // ;
    // return output

    let filteredCustomers = this.customersData.filter(customer => {
      let name = customer.name.toUpperCase();
      let searchCap = search.toUpperCase();
      if (name.includes(searchCap)) {
        return customer
      }
    })
    domUpdates.domSearchCustomerName(filteredCustomers)
    return filteredCustomers
  }

}

export default MainRepo;
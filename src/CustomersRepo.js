import domUpdates from './domUpdates'
class CustomersRepo {
  constructor(data, today) {
    this.data = data;
    this.today = today;
  }

  searchCustomerName(search) {
    let filteredCustomers = this.data.users.filter(customer => {
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

export default CustomersRepo;
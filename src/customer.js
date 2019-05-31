class Customer {
  constructor(data) {
    this.data = data;
  }

  findById(id) {
    return this.data.find(item => item.id === id)
  }

  findByName(name) {
    return this.data.find(item => item.name.toUpperCase() === name.toUpperCase())
  }
}

export default Customer;
class Order {
  constructor(data) {
    this.data = data;
  }

  findByDate(date) {
    return this.data.filter(dayObj => dayObj.date === date)
  }

  totalSpentByDate(date) {
    return this.findByDate(date).reduce((acc, day) => acc += day.totalCost, 0)
  }

  findById(id) {
    return this.data.filter(dayObj => dayObj.userID === id)
  }

  totalAmountSpent() {
    return Number(this.data.reduce((acc, day) => acc += day.totalCost, 0).toFixed(2))
  }

  customerTotalSpent(id) {
    return Number(this.findById(id).reduce((acc, day) => acc += day.totalCost, 0).toFixed(2))
  }

  itemsAndPrices() {
    return this.data.reduce(function(acc, day) {
      !acc[day.food] ? acc[day.food] = day.totalCost : null;
      return acc
    }, {})
  }
}

export default Order;
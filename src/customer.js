class Customer {
    constructor(data) {
        this.data = data;
    }

    findOrderBreakDown(customer) {
        const orders = this.data.roomServices.roomServices.filter(item => item.userID === customer.id)
        const breakDown = orders.reduce((datesAndDollars, order) => {
          if(!datesAndDollars[order.date]) {
          datesAndDollars[order.date] = []
          }
          datesAndDollars[order.date].push(order.totalCost)
       return datesAndDollars
        },{})
       return breakDown
       
    }


}

export default Customer
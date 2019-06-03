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

    findRoomServiceTotalByDate(date, customer) {
        const orders = this.data.roomServices.roomServices.filter(item => item.userID === customer.id)
       const specificDate = orders.filter(item => item.date === date);
       return specificDate.reduce((totalForDate, order) => {
           totalForDate += order.totalCost
        return totalForDate
       }, 0)
    }

    findAllTimeOrderTotal(customer) {
        const orders = this.data.roomServices.roomServices.filter(item => item.userID === customer.id)
        return orders.reduce((totalDollars, order) => {
          return totalDollars += order.totalCost
        }, 0)
    }

    findBookingsSummary(customer) {
        const total = this.data.bookings.bookings.filter(item => item.userID === customer.id)
        return total.reduce((allDates, booking) => {
          if(total.indexOf(booking.date) === total.indexOf(booking.totalCost)) {
            if(!allDates[booking.date])
            allDates[booking.date] = booking.roomNumber
          }
          return allDates
        }, {})
    }


}

export default Customer
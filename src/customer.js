class Customer {
    constructor(data) {
        this.data = data;
        this.newGuests = [];
    }

    findGuestByName(name) {
      return this.data.users.users.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
      
    }

    addNewGuest(firstName, lastName) {
     return this.newGuests.push({
         id: 1 + this.data.users.users.length++,
         name: `${firstName} ${lastName}`
        })
     }


    findOrderBreakDown(customer) {
      const guest = customer.find(item => item)
      const orders = this.data.roomServices.roomServices.filter(item => item.userID === guest.id)
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
      const guest = customer.find(item => item)
        const orders = this.data.roomServices.roomServices.filter(item => item.userID === guest.id)
       const specificDate = orders.filter(item => item.date === date);
       return specificDate.reduce((totalForDate, order) => {
           totalForDate += order.totalCost
        return totalForDate
       }, 0)
    }

    findAllTimeOrderTotal(customer) {
      const guest = customer.find(item => item)
        const orders = this.data.roomServices.roomServices.filter(item => item.userID === guest.id)
        return orders.reduce((totalDollars, order) => {
          return totalDollars += order.totalCost
        }, 0)
    }

    findBookingsSummary(customer) {
      const guest = customer.find(item => item)
        const total = this.data.bookings.bookings.filter(item => item.userID === guest.id)
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
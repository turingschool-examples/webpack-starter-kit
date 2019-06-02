class OrderRepo {
    constructor(data) {
        this.data = data;
    }

   findOrdersForToday(date) {
       return this.data.roomServices.roomServices.filter(item => item.date === date)
   }


}

export default OrderRepo
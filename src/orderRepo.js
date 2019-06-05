class OrderRepo {
    constructor(data) {
        this.data = data;
        this.date = this.findTodaysDate()
    }

    findTodaysDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return today = dd + '/' + mm + '/' + yyyy;
    }

   findOrdersForToday() {
       return this.data.roomServices.roomServices.filter(item => item.date === this.date)
   }

   findOrderByDate(date) {
        return this.data.roomServices.roomServices.filter(item => item.date === date)
      
   }


}

export default OrderRepo
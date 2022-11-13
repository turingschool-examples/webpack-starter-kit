class Customer {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.username = `customer${data.id}`;
    this.password = "overlook2021";
  }
  getMyBookings(bookings) {
    let myBookings = bookings.filter((booking) => booking.userID === this.id);
    if (myBookings.length > 0) {
      return myBookings;
    } else {
      return `You have not made any bookings.`;
    }
  }
  chooseADate(date) {
    const today = this.getToday();
    let chosenDate = new Date(date);
    if (chosenDate >= today) {
      chosenDate = chosenDate.toISOString();
      chosenDate = chosenDate.split("T");
      let newChosenDate = chosenDate[0].split("-").join("/");
      return newChosenDate;
    } else {
      return `Please choose a valid date`;
    }
  }
  getToday() {
    const today = Date.now();
    const date = new Date(today);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

export default Customer;

class Customer {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
  getMyBookings(bookings) {
    let myBookings = bookings.filter((booking) => booking.userID === this.id);
    if (myBookings.length > 0) {
      return myBookings;
    } else {
      return `You have not made any bookings.`;
    }
  }
  chooseADate(day, month, year) {
    const today = this.getToday();
    let chosenDate = new Date();
    chosenDate.setFullYear(year, month - 1, day - 1);
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }
}

export default Customer;

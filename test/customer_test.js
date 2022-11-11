import chai from "chai";
import Customer from "../src/classes/customer";
import customerData from "../src/sampleData/customer_sample_data";
import bookingsData from "../src/sampleData/booking_sample_data";
const expect = chai.expect;

describe("Customer", function () {
  let data = customerData[0];
  let data2 = customerData[1];
  let customer1 = new Customer(data);
  let customer2 = new Customer(data2);

  function getTodaysDate() {
    let now;
    now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }

  it("Should take in an object", function () {
    expect(data).to.be.an("object");
  });
  it("Should have an id", function () {
    expect(customer1.id).to.equal(1);
    expect(customer2.id).to.equal(2);
  });
  it("Should have a name", function () {
    expect(customer1.name).to.equal("Leatha Ullrich");
    expect(customer2.name).to.equal("Rocio Schuster");
  });
  it("Should be able to find customers bookings", function () {
    expect(customer1.getMyBookings(bookingsData)).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2023/02/05",
        roomNumber: 12,
      },
    ]);
  });
  it("Should should tell the customer if they have no bookings", function () {
    expect(customer2.getMyBookings(bookingsData)).to.equal(
      "You have not made any bookings."
    );
  });
  it("Should be able to choose today", function () {
    let now = getTodaysDate();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const date1 = customer1.chooseADate(day, month, year);
    let nowString = now.toISOString();
    nowString = nowString.split("T");
    let todayDate = nowString[0].split("-").join("/");
    expect(date1).to.equal(todayDate);
  });
  it("Should be able to choose a future date", function () {
    const date2 = customer1.chooseADate(29, 12, 2022);
    const date3 = customer1.chooseADate(1, 3, 2027);
    expect(date2).to.equal(`2022/12/29`);
    expect(date3).to.equal(`2027/03/01`);
  });
  it("Should not be able to choose a past date", function () {
    const date2 = customer1.chooseADate(1, 5, 2022);
    const date3 = customer1.chooseADate(1, 3, 1997);
    expect(date2).to.equal(`Please choose a valid date`);
    expect(date3).to.equal(`Please choose a valid date`);
  });
});

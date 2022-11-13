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
    let now = new Date(Date.now());
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
  it("Should have a username", function () {
    expect(customer1.username).to.equal("customer1");
    expect(customer2.username).to.equal("customer2");
  });
  it("Should have a password", function () {
    expect(customer1.password).to.equal("overlook2021");
    expect(customer2.password).to.equal("overlook2021");
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
    const date1 = customer1.chooseADate(`${year}/${month}/${day}`);
    let nowString = now.toISOString();
    nowString = nowString.split("T");
    let todayDate = nowString[0].split("-").join("/");
    expect(date1).to.equal(todayDate);
  });
  it("Should be able to choose a future date", function () {
    const date2 = customer1.chooseADate(`2022/12/29`);
    const date3 = customer1.chooseADate(`2027/03/01`);
    expect(date2).to.equal(`2022/12/29`);
    expect(date3).to.equal(`2027/03/01`);
  });
  it("Should not be able to choose a past date", function () {
    const date2 = customer1.chooseADate(`2022/5/1`);
    const date3 = customer1.chooseADate(`1997/3/1`);
    expect(date2).to.equal(`Please choose a valid date`);
    expect(date3).to.equal(`Please choose a valid date`);
  });
});

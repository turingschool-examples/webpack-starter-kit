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
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

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
        date: "2022/02/05",
        roomNumber: 12,
      },
    ]);
  });
  it("Should should tell the customer if they have no bookings", function () {
    expect(customer2.getMyBookings(bookingsData)).to.equal(
      "You have not made any bookings."
    );
  });
  it("Should be able to choose todays date", function () {
    const date2 = customer1.chooseADate(day, month, year);
    expect(date2).to.equal(`${day}/${month}/${year}`);
  });
  it("Should be able to choose a future date", function () {
    const date2 = customer1.chooseADate(29, 12, 2022);
    const date3 = customer1.chooseADate(1, 3, 2027);
    expect(date2).to.equal(`29/12/2022`);
    expect(date3).to.equal(`1/3/2027`);
  });
  it("Should not be able to choose a past date", function () {
    const date2 = customer1.chooseADate(1, 5, 2022);
    const date3 = customer1.chooseADate(1, 3, 1997);
    expect(date2).to.equal(`Please choose a valid date`);
    expect(date3).to.equal(`Please choose a valid date`);
  });
});

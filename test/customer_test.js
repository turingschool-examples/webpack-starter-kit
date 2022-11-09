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
});

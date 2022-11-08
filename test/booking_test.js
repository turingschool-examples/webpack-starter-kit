import chai from "chai";
import Booking from "../src/classes/booking";
import bookingsData from "../src/sampleData/booking_sample_data";
const expect = chai.expect;

describe("Booking", function () {
  let data = bookingsData[0];
  let data2 = bookingsData[1];
  let booking1 = new Booking(data);
  let booking2 = new Booking(data2);

  it("Should take in an object", function () {
    expect(data).to.be.an("object");
  });
  it("Should have an id", function () {
    expect(booking1.id).to.equal("5fwrgu4i7k55hl6sz");
    expect(booking2.id).to.equal("5fwrgu4i7k55hl6t5");
  });
  it("Should have a user ID", function () {
    expect(booking1.userID).to.equal(9);
    expect(booking2.userID).to.equal(43);
  });
  it("Should have a date", function () {
    expect(booking1.date).to.equal("2022/04/22");
    expect(booking2.date).to.equal("2022/01/24");
  });
  it("Should have a room number", function () {
    expect(booking1.roomNumber).to.equal(15);
    expect(booking2.roomNumber).to.equal(24);
  });
});

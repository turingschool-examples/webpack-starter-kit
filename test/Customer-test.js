import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);
import Customer from "../src/Customer";
import data from "../src/data-sample";
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, 'domCustomerBookingHistory', () => true);
chai.spy.on(domUpdates, 'domCustomerServicesHistory', () => true);

describe("Customer", function() {
  let customer;
  beforeEach(function() {
    customer = new Customer(data, "Ervin Larson");
  });

  it("should be a function", function() {
    expect(Customer).to.be.a("function");
  });

  it("should be an instace of CustomerRepo", function() {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it("returnCustomerId should return ID number of a customer", function() {
    expect(customer.returnCustomerId()).to.eql(26);
  });

  it("customerBookingHistory should return booking history of one customer", function() {
    expect(customer.customerBookingHistory()).to.eql([
      {roomType: "junior suite", 
        date: "22/02/2020",
        roomNumber: 73 },
      {roomType: "residential suite",
        date: "18/07/2019",
        roomNumber: 123 },
      {roomType: "single room",
        date: "16/07/2019",
        roomNumber: 169 }
    ]);
  });

  it("customerServicesHistory should return services history of one customer", function() {
    expect(customer.customerServicesHistory()).to.eql({
      serviceData: [
        {
          userID: 26,
          date: "10/07/2019",
          food: "Unbranded Plastic Sandwich",
          totalCost: 9.6
        },
        {
          userID: 26,
          date: "04/12/2019",
          food: "Unbranded Wooden Sandwich",
          totalCost: 8.7
        },
        {
          userID: 26,
          date: "22/06/2019",
          food: "Incredible Fresh Sandwich",
          totalCost: 8.2
        },
        {
          userID: 26,
          date: "06/07/2019",
          food: "Generic Rubber Sandwich",
          totalCost: 7.62
        }
      ],
      totalPrice: 34.12
    });
  });
});

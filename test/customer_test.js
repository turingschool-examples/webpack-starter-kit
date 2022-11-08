import chai from "chai";
import Customer from "../src/classes/customer";
import customerData from "../src/sampleData/customer_sample_data";
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
});

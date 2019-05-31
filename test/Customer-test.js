import chai from 'chai'
const expect = chai.expect;
import Customer from "../src/Customer"
import customerSample from "../src/customerSample"

describe('Customer', function() {
   
    let customer;
    beforeEach(function() {
    customer = new Customer(1, "Autumn Toy");
    });

    it('should be a function', function() {
    expect(Customer).to.be.a('function');
    });

    it('should make an instance of Customer', function() {
    expect(customer).to.be.an.instanceOf(Customer);
    })

    it('should have a name', function() {
    expect(customer.name).to.equal("Autumn Toy");
    })

    it('should have an id', function() {
        expect(customer.id).to.equal(1);
    })

    // it('should retur')
});

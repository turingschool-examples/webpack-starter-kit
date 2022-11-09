import { expect } from 'chai'
import Customer from '../src/classes/customer'

describe('customer', () => {
    let customer1
    beforeEach(() => {
        customer1 = new Customer({
            "id": 1,
            "name": "Leatha Ullrich"
          }, [])
    })
    it('should be a function', () => {
        expect(Customer).to.be.a('function')
    })

    it('should contain an id', () => {
        expect(customer1.id).to.equal(1)
    })

    it('should contain a name', () => {
        expect(customer1.name).to.equal('Leatha Ullrich')
    })
    
    it('should have booking data', () => {
        expect(customer1.allBookings).to.be.an('array')
    })
})
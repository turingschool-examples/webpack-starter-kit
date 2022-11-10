import { expect } from 'chai'
import Customer from '../src/classes/customer'

describe('customer', () => {
    let customer1
    beforeEach(() => {
        customer1 = new Customer({
            "id": 9,
            "name": "Leatha Ullrich"
        }, [{ "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2022/04/22", "roomNumber": 15 },
        { "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2022/01/24", "roomNumber": 24 },
        { "id": "5fwrgu4i7k55hl6t6", "userID": 13, "date": "2022/01/10", "roomNumber": 12 },
        { "id": "5fwrgu4i7k55hl6swqz", "userID": 9, "date": "2022/01/22", "roomNumber": 15 }])
    })
    it('should be a function', () => {
        expect(Customer).to.be.a('function')
    })

    it('should contain an id', () => {
        expect(customer1.id).to.equal(9)
    })

    it('should contain a name', () => {
        expect(customer1.name).to.equal('Leatha Ullrich')
    })

    it('should have booking data', () => {
        expect(customer1.allBookings).to.be.an('array')
    })
    it('should store only this customers bookings', () => {
        customer1.findAllBookings()
        expect(customer1.customersBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2022/04/22", "roomNumber": 15 },
        { "id": "5fwrgu4i7k55hl6swqz", "userID": 9, "date": "2022/01/22", "roomNumber": 15 }])
    })
    it('should sort all of the current customers bookings', () => {
        customer1.findAllBookings()
        customer1.sortBookings()
        expect(customer1.customersBookings).to.deep.equal([{ "id": "5fwrgu4i7k55hl6swqz", "userID": 9, "date": "2022/01/22", "roomNumber": 15 },
        { "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2022/04/22", "roomNumber": 15 }])
    })
})
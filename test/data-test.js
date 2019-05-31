import chai from 'chai';
const expect = chai.expect;

import Data from '../src/data'
import bookingData from '../Data/booking-data'
import serviceData from '../Data/service-data'
import roomsData from '../Data/rooms-data'
import userData from '../Data/user-data'

describe.only('Data', function() {
  let data;
  beforeEach(function() {
    data = new Data(bookingData, serviceData, roomsData, userData)
  })

  it('should be a function', function() {
    expect(Data).to.be.a('function')
  })

  it('should be an instantation of the Data class', function() {
    expect(data).to.be.an.instanceOf(Data)
  })

  it('should be able to create a new user and add user object to the data', function() {
    data.addCustomer('Ryan')
    expect(data.customerData[100]).to.deep.equal({id: 101, name: 'Ryan'})
  })
})
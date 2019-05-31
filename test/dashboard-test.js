import chai from 'chai';
const expect = chai.expect;

import Dashboard from '../src/dashboard'
import bookingData from '../Data/booking-data'
import serviceData from '../Data/service-data'
import roomsData from '../Data/rooms-data'

describe('Dashboard', function() {
  let dashboard;
  beforeEach(function() {
    dashboard = new Dashboard(bookingData, serviceData, roomsData)
  })

  it('should be a function', function() {
    expect(Dashboard).to.be.a('function')
  })

  it('should be an instantiation of the Dashboard class', function() {
    expect(dashboard).to.be.an.instanceOf(Dashboard)
  })

  it('should return an array of room numbers for a day', function() {
    expect(dashboard.findBookingDebt('29/09/2019')).to.deep.equal([50, 79, 13, 51])
  })

  it('should return the total cost of all orders for a day', function() {
    expect(dashboard.findOrderDebt('21/10/2019')).to.equal(17.05)
  })

  it('should be able to find the total cost of all the rooms booked for a day', function() {
    expect(dashboard.findRoomDebt('29/09/2019')).to.equal(1790.38)
  })

  it('should be able to find all the debts per day', function() {
    expect(dashboard.totalDebtsByDay('29/09/2019')).to.equal(1813.42)
  })
})
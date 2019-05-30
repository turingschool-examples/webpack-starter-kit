import chai from 'chai';
const expect = chai.expect;

import Data from '../src/data'

describe.skip('Data', function() {
  let data;
  beforeEach(function() {
    data = new Data()
  })

  it('should be a function', function() {
    expect(Data).to.be.a('function')
  })

  it('should be an instantation of the Data class', function() {
    expect(data).to.be.an.instanceOf(Data)
  })

  it('should fetch the users data', function() {
    data.fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  })
})
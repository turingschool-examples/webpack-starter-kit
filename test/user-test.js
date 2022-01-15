import chai from 'chai';
const expect = chai.expect;
import users from "./user-data.js";
import User from "../src/classes/users-class.js"

describe('User', () => {
    let userOne;

    beforeEach(() => {
        userOne = new User(users[0])
    })

    it('Should be a function', () => {
        expect(User).to.be.a('function');
    });

    it('Should have an id', () => {
        expect(userOne.id).to.equal(1);
    })

    it('Should have a name', () => {
        expect(userOne.name).to.equal("Leatha Ullrich");
    })

    it('Should be know if it is a customer or not', () => {
        expect(userOne.isCustomer).to.equal(true);
    })

    it('Should be able to store bookings', () => {
        expect(userOne.bookings).to.deep.equal([])
    })
})


import chai from 'chai';
const expect = chai.expect;
import rooms from "./rooms-data.js";



describe('Room', () => {
    let roomOne;

    beforeEach(() => {
        roomOne = new Room(rooms[0])
    })

    it('Should be a function', () => {
        expect(Room).to.be.a('function');
    });

    it('Should have a number', () => {
        expect(roomOne.number).to.equal(1);
    })

    it('Should have a type', () => {
        expect(roomOne.roomType).to.equal("residential suite");
    })

    it('Should be able to have a bidet', () => {
        expect(roomOne.bidet).to.equal(true);
    })

    it('Should have a bed size', () => {
        expect(roomOne.bedSize).to.equal("queen");
    })

    it('Should have a number of beds', () => {
        expect(roomOne.numBeds).to.equal(1);
    })

    it('Should have a nightly cost', () => {
        expect(roomOne.costPerNight).to.equal(358.4)
    })
})


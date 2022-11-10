import chai from "chai";
const expect = chai.expect;
import Room from "../src/classes/room";
import roomData from "../src/sampleData/room_sample_data";

describe("Room", function () {
  let data = roomData[0];
  let data2 = roomData[1];
  let room1 = new Room(data);
  let room2 = new Room(data2);
  it("Should take in an object", function () {
    expect(data).to.be.an("object");
  });
  it("Should have an number", function () {
    expect(room1.number).to.equal(1);
    expect(room2.number).to.equal(2);
  });
  it("Should have a room type", function () {
    expect(room1.roomType).to.equal("residential suite");
    expect(room2.roomType).to.equal("suite");
  });
  it("Should tell if it has a bidet or not", function () {
    expect(room1.bidet).to.equal(true);
    expect(room2.bidet).to.equal(false);
  });
  it("Should have a bed size", function () {
    expect(room1.bedSize).to.equal("queen");
    expect(room2.bedSize).to.equal("full");
  });
  it("Should let us know how many beds there are", function () {
    expect(room1.numBeds).to.equal(1);
    expect(room2.numBeds).to.equal(2);
  });
  it("Should have a cost per night", function () {
    expect(room1.costPerNight).to.equal(358.4);
    expect(room2.costPerNight).to.equal(477.38);
  });
});

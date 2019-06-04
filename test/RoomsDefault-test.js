import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);
import RoomsDefault from "../src/RoomsDefault";
import data from "../src/data-sample";
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, "domNoRoomsAvailable", () => true);
chai.spy.on(domUpdates, "domPercentageRoomsOccupied", () => true);
chai.spy.on(domUpdates, "domMostPopularDay", () => true);
chai.spy.on(domUpdates, "domLeastPopularDay", () => true);

describe("RoomsDefault", function() {
  let roomsDefault;
  beforeEach(function() {
    roomsDefault = new RoomsDefault(data, "01/06/2019");
  });

  it("should be a function", function() {
    expect(RoomsDefault).to.be.a("function");
  });

  it("should be an instace of CustomerRepo", function() {
    expect(roomsDefault).to.be.an.instanceOf(RoomsDefault);
  });

  it("noRoomsAvailable should return numbers of available rooms", function() {
    expect(roomsDefault.noRoomsAvailable().length).to.equal(198);
  });

  it("percentageRoomReposOccupied should return percentage of accupied rooms", function() {
    expect(roomsDefault.percentageRoomsOccupied()).to.equal(1);
  });

  it("bookingDatesBreakDown should return an object with key-value pairs of min, max, uniquDates and dateRepeat", function() {
    expect(roomsDefault.bookingDatesBreakDown()).to.eql({
      maxValue: 2,
      minValue: 1,
      dateRepeatValue: [
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      uniqueDatesValue: [
        "01/06/2019",
        "31/10/2019",
        "15/01/2020",
        "07/02/2020",
        "22/02/2020",
        "21/10/2019",
        "07/10/2019",
        "18/07/2019",
        "17/11/2019",
        "19/08/2019",
        "22/09/2019",
        "03/11/2019",
        "14/06/2019",
        "16/07/2019",
        "29/09/2019",
        "06/11/2019",
        "03/10/2019",
        "04/08/2019",
        "30/10/2019",
        "16/01/2020",
        "07/01/2020",
        "05/11/2019",
        "06/07/2019",
        "29/01/2020",
        "30/01/2020",
        "17/03/2020",
        "05/06/2019",
        "06/03/2020",
        "09/01/2020",
        "27/11/2019",
        "11/12/2019",
        "06/01/2020",
        "24/01/2020"
      ]
    });
  });

  it("mostPopularDay should return all popular days", function() {
    expect(roomsDefault.mostPopularDay()).to.eql({numOfDays: 2, dates: [ '01/06/2019', '07/01/2020' ]});
  });

  it("leastPopularDay should return least popular days", function() {
    expect(roomsDefault.leastPopularDay()).to.eql({ numOfDays: 1,
      dates:
       [ '31/10/2019',
         '15/01/2020',
         '07/02/2020',
         '22/02/2020',
         '21/10/2019',
         '07/10/2019',
         '18/07/2019',
         '17/11/2019',
         '19/08/2019',
         '22/09/2019',
         '03/11/2019',
         '14/06/2019',
         '16/07/2019',
         '29/09/2019',
         '06/11/2019',
         '03/10/2019',
         '04/08/2019',
         '30/10/2019',
         '16/01/2020',
         '05/11/2019',
         '06/07/2019',
         '29/01/2020',
         '30/01/2020',
         '17/03/2020',
         '05/06/2019',
         '06/03/2020',
         '09/01/2020',
         '27/11/2019',
         '11/12/2019',
         '06/01/2020',
         '24/01/2020' ] });
  });
});

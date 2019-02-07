import chai from 'chai';
const expect = chai.expect;

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});


// for (var i = this.categoryList.length-1; i >=0; i--) {
     
//         var randomIndex = Math.floor(Math.random()*(i+1)); 
//         var itemAtIndex = this.categoryList[randomIndex]; 
         
//         this.categoryList[randomIndex] = this.categoryList[i];
//         this.categoryList[i] = itemAtIndex;
//     }
//     // console.log("2" + this.categoryList);

//     this.firstRoundCategories = this.categoryList.splice(0, 4);
//     this.secondRoundCategories = this.categoryList.splice(0, 4);
//     this.finalRoundCategory = this.categoryList.splice(0, 1);

//     domUpdates.labelCategories([this.firstRoundCategories], [this.secondRoundCategories], [this.finalRoundCategory]);
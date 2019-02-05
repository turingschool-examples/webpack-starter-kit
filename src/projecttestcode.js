   // From Justin's advice
   

  this.firstRoundCategories = this.categoryList.splice(0, 4);
  this.secondRoundCategories = this.categoryList.splice(0, 4);
  this.finalRoundCategory = this.categoryList.splice(0, 1);

  domUpdates.labelCategories([this.firstRoundCategories], [this.secondRoundCategories], [this.finalRoundCategory]);
  


  this.cluesWithCategories.reduce((acc,currentClue) => {
    let contains = false;

    acc.forEach(uniqueClue  => {
      if(uniqueClue.categoryName === currentClue.categoryName){
        contains = true;
      }
    })

    if(!contains){
      acc.push(currentClue)
    }
    // console.log(acc);
    return acc;
  }, [])

  

    

//our try


    // this.cluesWithCategories.reduce((acc, currentClue) => {
    //   console.log(currentClue);

    //   if (!acc.includes(currentClue.categoryName && currentClue.pointValue)) {
    //       acc.push(currentClue);
    //   };
    //   console.log(acc);
    //   return acc;
    //   }, []);

//tinkering with justins idea    

    // let roundArray = this.cluesWithCategories.reduce((acc,currentClue) => {
    //   let contains = false;
    //   acc.forEach(uniqueClue  => {
    //     if(uniqueClue.pointValue === currentClue.pointValue){
    //       contains = true;
    //     };
    //   });

    //   if(!contains){
    //     acc.push(currentClue)
    //   };

    //   console.log(acc);
    //   return acc;
    //   }, []);

    //   console.log("round", roundArray);

    // this.firstRoundCategories = this.cluesWithCategories.find();
    // this.secondRoundCategories = this.categoryList.splice(0, 4);
    // this.finalRoundCategory = this.categoryList.splice(0, 1);

    // domUpdates.labelCategories([this.firstRoundCategories], [this.secondRoundCategories], [this.finalRoundCategory]);

//experiment

 let categoryArray0 = this.cluesWithCategories.filter(clue => {
    return clue.categoryId === 1;
 })
 console.log(categoryArray0);

    // console.log(this.firstRoundCategories);

    // let xyz = this.firstRoundCategories.forEach(category => {
    //   const cluesPerCat = this.cluesWithCategories.filter(clue => {
    //     return clue.categoryId === data.categories[category]
    //   })
      
    // })
    // console.log(xyz);
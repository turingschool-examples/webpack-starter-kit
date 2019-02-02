class Dailydouble {
  constructor() {
    this.randomNumber = randomNumber;
  };

  randomNumberGenerator(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Random Number " + randomNumber);
  };
}




export default Dailydouble;
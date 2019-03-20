import data from './data.js';

class Wheel {
    constructor(){
        this.randomNumbers = [];
    }
    spinWheel() {
        let randomIndex = Math.floor(Math.random() * (data.wheel.length-1) + 0)
        let newNum = data.wheel.find( (cur, idx) => {
            return idx === randomIndex
        })
        console.log(newNum)
        return newNum
    }
}

export default Wheel;
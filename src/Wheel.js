import data from './data.js';

class Wheel {
    constructor(){
        this.spunValue = []
    }
    spinWheel() {
        if(this.spunValue.length === 0) {
            let randomIndex = Math.floor(Math.random() * (data.wheel.length-1) + 0)
            let newNum = data.wheel.find( (cur, idx) => {
                return idx === randomIndex
            })
            console.log(newNum)
            this.spunValue.push(newNum);
        }
    }
}



export default Wheel;
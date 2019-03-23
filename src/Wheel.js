import data from './data.js';

class Wheel {
    constructor(){
        this.spunValue = null
        this.disabled = false
    }
    spinWheel() {
        let randomIndex = Math.floor(Math.random() * (data.wheel.length-1) + 0)
        let newVal = data.wheel.find( (cur, idx) => {
            return idx === randomIndex
        })
        this.spunValue = newVal;
        console.log(newVal)
    }
    toggleDisableSpin() {
        this.disabled = !this.disabled
    }
}



export default Wheel;
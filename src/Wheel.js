import data from './data.js';

class Wheel {
    constructor(){
        this.spunValue = []
        this.disabled = false
    }
    getWheelValues() {
        if(this.spunValue.length === 0) {
            for(let i = 0; i < 4; i++) {
                let sixValues = []
                this.spunValue.push(sixValues)
                for(let j = 0; j < 6; j++) {
                    let randomIndex = Math.floor(Math.random() * (data.wheel.length-1) + 0)
                    let newVal = data.wheel.find( (cur, idx) => {
                        return idx === randomIndex
                    });
                    sixValues.push(newVal)
                }
            }
        }
    }
    toggleDisableSpin() {
        this.disabled = !this.disabled
    }
}



export default Wheel;
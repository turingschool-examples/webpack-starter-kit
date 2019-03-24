import data from './data.js';

class Wheel {
    constructor(){
        this.currentSpinValue = null
        this.spunValues = [];
        this.disabled = false;
    }
    getWheelValues() {
        if(this.spunValues.length === 0) {
            for(let i = 0; i < 4; i++) {
                let sixValues = []
                this.spunValues.push(sixValues)
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

    spinWheel() {
        let randomIndex =  Math.floor(Math.random() * (this.spunValues[0].length-1) + 0)
        let values = this.spunValues[0].find( (cur, idx) => {
            return idx === randomIndex
        })
        console.log(values)
        return values
    }

    toggleDisableSpin() {
        this.disabled = !this.disabled
    }
}



export default Wheel;
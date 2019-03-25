class FastRound extends Round {
    constructor(question, answers) {
        super(question, answers);
        this.timer = 30;
        this.multiplier = 2;
    }

    startTimer() {

    }

    setMultiplier(chosenNumber) {
        this.multiplier = chosenNumber;
    }
}

export default FastRound;
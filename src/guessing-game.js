class GuessingGame {
    constructor() {
        this.minValue = null;
        this.maxValue = null;
        this.currentNumber = null;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.currentNumber = Math.round((this.minValue + this.maxValue) / 2);
        return this.currentNumber;
    }

    lower() {
        this.maxValue = this.currentNumber;
    }

    greater() {
        this.minValue = this.currentNumber;
}
}
module.exports = GuessingGame;

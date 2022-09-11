class Skier {
  constructor(skierName, skierLiftTicket) {
    this.name = skierName;
    this.hasLiftTicket = skierLiftTicket;
    this.skillLevel = 1;
    this.nextSlope = 'green circle'
  }
  takeLesson() {
    this.skillLevel += 1
  }
  pickSlope() {
    if (this.skillLevel >=4) {
      this.nextSlope = 'black diamond'
    } else {
      this.nextSlope = 'blue square'
    }
  }
}

module.exports = Skier;

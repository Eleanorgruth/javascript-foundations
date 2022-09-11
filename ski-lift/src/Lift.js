var Skier = require('./Skier');

class Lift {
  constructor(liftLimit) {
    this.inService = true;
    this.limit = liftLimit;
    this.skiers = [];
    this.safetyBar = 'up'
  }
  admitSkier(name, liftTicket) {
    var skier = new Skier(name, liftTicket)
      if(this.skiers.length < this.limit && skier.hasLiftTicket) {
      this.skiers.push(skier)
    } else if (this.skiers.length >= this.limit) {
      return `Sorry, ${skier.name}. Please wait for the next lift!`
    } else if (!skier.hasLiftTicket) {
      return `Sorry, ${skier.name}. You need a lift ticket!`
    }
  }
  startLift() {
    var skierAmount = this.limit - this.skiers.length
    if(skierAmount === 0) {
      this.safetyBar = 'down'
    } else if (skierAmount === 1) {
      return `We still need ${skierAmount} more skier!`
    } else {
      return `We still need ${skierAmount} more skiers!`
    }
  }
}

module.exports = Lift;

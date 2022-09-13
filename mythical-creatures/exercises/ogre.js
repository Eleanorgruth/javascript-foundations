var Human = require('./human');

class Ogre {
  constructor(ogreInfo) {
    this.name = ogreInfo.name;
    this.home = ogreInfo.abode || "Swamp";
    this.swings = 0
  }
  encounter(humanName) {
    var newHuman = new Human(humanName)
      humanName.encounterCounter += 1
      if (humanName.encounterCounter === 3) {
        this.swingAt(humanName)
      } else if (humanName.encounterCounter === 6) {
        this.swingAt(humanName)
        humanName.knockedOut = true
      }
    }
  swingAt() {
    this.swings += 1
    }
  apologize(humanName) {
    humanName.knockedOut = false

  }
  }


module.exports = Ogre

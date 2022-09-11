var Direwolf = require('./direwolf');

class Stark {
  constructor(starkObject) {
      this.name = starkObject.name
      this.location = starkObject.area || 'Winterfell'
      this.safe = false
    }
    sayHouseWords() {
      if (!this.safe) {
        return 'Winter is Coming'
      } else {
        return 'The North Remembers'
      }
    }
    callDirewolf(name, location) {
      var newDirewolf = new Direwolf(name, this.location)
        newDirewolf.protect(this)
        return newDirewolf
    }
  }

module.exports = Stark

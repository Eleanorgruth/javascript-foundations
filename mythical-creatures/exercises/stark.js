class Stark {
  constructor(starkObject) {
      this.name = starkObject.name
      this.location = starkObject.area || 'Winterfell'
    }
  }

console.log(`STARK!!! ${Stark.location}`)

module.exports = Stark

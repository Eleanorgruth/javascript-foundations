var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(personInfo) {
  var newStatue = new Statue(personInfo.name)
    if (this.statues.length >= 3) {
      var becomeAPerson = new Person(this.statues[0].name)
      becomeAPerson.mood = 'relieved'
      this.statues.shift()
      this.statues.push(newStatue)
      return becomeAPerson
    } else {
      this.statues.push(newStatue)

    }
  }
}
      //  console.log(new Person(this.statues[0].name))

// TODO: refractor this if statement to end on an else.
      //console.log(this.statues)

module.exports = Medusa

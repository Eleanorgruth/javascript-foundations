class Werewolf {
  constructor(nameWerewolf) {
    this.name = nameWerewolf
    this.form = 'human'
    this.hungry = false
  }
completeTransformation() {
  if (this.form === 'human') {
    this.form = 'wolf'
    this.hungry = true
    return 'Aaa-Woooo!'
  } else {
    this.form = 'human'
    this.hungry = false
    return 'Where are I?'
  }
}
eatVictim(victimInfo) {
  if (this.form === 'human') {
    return "No way am I eating Baby, I'd like a burger!"
  } else {
  victimInfo.alive = false
  this.form = 'human'
  return 'Yum, Hannah was delicious.'
}
}
}

module.exports = Werewolf

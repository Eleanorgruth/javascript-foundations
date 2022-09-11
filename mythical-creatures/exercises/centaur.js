class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name;
    this.breed = centaurInfo.type;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
    this.layingDown = false;
  }

shootBow() {
  this.counter += 1
  if (this.cranky) {
    return 'NO!'
  } else if (this.counter >= 3) {
    this.cranky = true
    } return 'Twang!!!'
  }

run() {
  this.counter += 1
if (this.cranky) {
    return 'NO!'
  } else if (this.counter >= 3) {
  this.cranky = true}
    return 'Clop clop clop clop!!!'
}
sleep() {
 if (this.standing) {
   return 'NO!'
 } else if (this.layingDown) {
   this.cranky = false
   return 'ZZZZ'
 }
}

layDown() {
  this.standing = false
  this.layingDown = true
  this.cranky = true
}
standUp() {
  this.standing = true
  this.layingDown = false
}
drinkPotion() {
  if (!this.standing) {
    return 'Not while I\'m laying down!'
  } else {
    this.cranky = false
  }
}
}


module.exports =
  Centaur

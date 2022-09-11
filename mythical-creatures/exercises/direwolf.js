class Direwolf {
  constructor(nameOfWolf, homeOfWolf, sizeOfWolf) {
    this.name = nameOfWolf;
    this.home = homeOfWolf || 'Beyond the Wall'
    this.size = sizeOfWolf || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }
  protect(starkParam) {
    if (this.home === starkParam.location && this.starksToProtect.length < 2) {
    this.starksToProtect.push(starkParam)
    starkParam.safe = true
    this.huntsWhiteWalkers = false
  }
}
  leave(starkParam) {
    this.starksToProtect = []
    starkParam.safe = false
  }
}

module.exports = Direwolf

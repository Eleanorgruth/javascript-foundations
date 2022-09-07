class Direwolf {
  constructor(nameOfWolf, homeOfWolf, sizeOfWolf) {
    this.name = nameOfWolf;
    this.home = homeOfWolf || 'Beyond the Wall'
    this.size = sizeOfWolf || 'Massive'
    this.starksToProtect = []
  }
  protect(starkParam) {
    if (this.home === stark.location) {
    this.starksToProtect.push(starkParam)
  }
}
}

module.exports = Direwolf

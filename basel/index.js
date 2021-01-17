class Basel {
  constructor() {
    this.answer = Math.pow(Math.PI, 2) / 6
    this.state = 1
  }

  step() {
    function step(k) {
      state = state + 1 / Math.pow(k, 2)
      console.log(state)
    }
  }

  run(n) {
    for (let k = 1; k < n; k++) {
      this.step(k)
    }

    console.log(`Appromated Answer after ${n} steps: ${this.state}`)
  }
}

module.exports = Basel

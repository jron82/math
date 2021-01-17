var colors = require('colors')

const isEven = (n) => {
  return n % 2 === 0
}

const run = (limit) => {
  const heap = Array.from(Array(limit).keys())
  const results = []

  for (let number of heap) {
    const raised = Math.pow(number, 2)
    let num = String(raised)
    const l = num.length

    if (isEven(l)) {
      const mid = l / 2
      const a = Number(num.slice(0, mid))
      const b = Number(num.slice(mid, l))

      if (a + b === number) {
        results.push(number)
      }
    }
  }

  return results
}

const grab = (limit) => {
  return run(limit).length
}

const results = () => {
  console.log('Starting count from 10 to 1_000_000'.cyan)
  const count = []

  console.log('Finding 10'.green)
  let rs = grab(10)
  count.push({ 10: rs })

  console.log('Finding 100'.green)
  rs = grab(100)
  count.push({ 100: rs })

  console.log('Finding 1000'.green)
  rs = grab(1000)
  count.push({ 1000: rs })

  console.log('Finding 10_000'.green)
  rs = grab(10_000)
  count.push({ 10_000: rs })

  console.log('Finding 100_000'.green)
  rs = grab(100_000)
  count.push({ 100_000: rs })

  console.log('Finding 1_000_000'.green)
  rs = grab(1_000_000)
  count.push({ 1_000_000: rs })

  console.log('Finding 10_000_000'.green)
  rs = grab(10_000_000)
  count.push({ 10_000_000: rs })

  console.log('Finding 100_000_000'.green)
  rs = grab(100_000_000)
  count.push({ 100_000_000: rs })

  console.log('Finding 100_000_000_000'.green)
  rs = grab(100_000_000_000)
  count.push({ 100_000_000_000: rs })

  console.log(count)

  console.log('Finished!'.blue)
}

module.exports = results

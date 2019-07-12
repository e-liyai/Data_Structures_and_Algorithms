const hash = input => {
  if (typeof input !== 'number') return 'invalid input'

  const digits = (''+ input).split('')

  let sum = 0
  digits.forEach(item => {
    sum += parseInt(item)
  })
  return sum;
}

module.exports = {
  hash
}
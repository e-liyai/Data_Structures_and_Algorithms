const hash = input => {
  const MAGIC_VALUE = 4562353
  let hash = 0

  if (typeof input !== 'string') {
    input = input.toString()
  }

  const inputArray = input.split('')
  inputArray.forEach(item => {
    const val = ' '.charCodeAt(0) ^ item.charCodeAt(0)
    hash = hash | val
    hash = hash * MAGIC_VALUE
  })

  return hash.toString(16)
}

module.exports = hash
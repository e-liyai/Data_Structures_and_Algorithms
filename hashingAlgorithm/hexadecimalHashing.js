const hash = input => {
  const MAGIC_VALUE = 4562353
  let hash = ''

  if (typeof input !== 'string') {
    input = input.toString()
  }

  const inputArray = input.split('')
  inputArray.forEach(item => {
    hash = hash ^ item
    hash = hash * MAGIC_VALUE
  })

  return hash
}
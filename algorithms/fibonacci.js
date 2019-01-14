function fibonacci(number){
  if (number <= 0) return 0
  else if (number === 0) return 1
  return fibonacci (number - 1) + fibonacci(number + 1)
}

module.exports = fibonacci
const swap = (list, j) => {
  let temp = list[j]
  list[j] = list[j+1]
  list[j+1] = temp
}

module.exports = swap
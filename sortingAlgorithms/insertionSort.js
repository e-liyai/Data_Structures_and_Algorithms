const insertionSort = list => {
  let position
  let valueToInsert
  for(let i=0; i<list.length; i++) {
    valueToInsert = list[i]
    position = i
    while(position > 0 && list[position-1] > valueToInsert) {
      list[position] = list[position-1]
      position = position -1
    }
    list[position] = valueToInsert
  }
}

module.exports = insertionSort
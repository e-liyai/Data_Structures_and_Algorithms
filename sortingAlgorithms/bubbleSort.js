import swap from './utils'

const bubbleSort = list => {
  for(let i=0; i<list.length; i++){
    let swapped = false
    for(let j=0; j<list.length; j++) {
      if(list[j] > list[j+1]) {
        swap(list, j)
        swapped = true
      }
    }
    if(!swapped) break
  }
  return list
}

module.exports = bubbleSort
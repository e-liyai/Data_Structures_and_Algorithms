const selectionSort = list => {
  for(let i=0; i<list.length; i++) {
    let minimum = i
    for (let j=i+1; j<=list.length; j++) {
      if(list[j] < list[minimum]) minimum = j
    }
    if(minimum !== i) {
      let temp = list[minimum]
      list[minimum] = list[i]
      list[i] = temp
    }
  }
}

module.exports = selectionSort
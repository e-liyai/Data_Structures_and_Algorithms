const merge = (list1, list2) => {
  let sortedList = []

  while(list1.length && list2.length) {
    if(list1[0] > list2[0]){
      sortedList.push(list2[0])
      list2.splice(0, 1)
    } else {
      sortedList.push(list1[0])
      list1.splice(0, 1)
    }
  }

  while(list1.length) {
    sortedList.push(list1[0])
    list1.splice(0, 1)
  }
  while(list2.length) {
    sortedList.push(list2[0])
    list2.splice(0, 1)
  }

  return sortedList
}

const mergeSort = list => {
  if (list.length === 1) return list
  let subList1 = list.slice(0, parseInt(list.length/2))
  let subList2 = list.slice(parseInt(list.length/2), list.length)
  subList1 = mergeSort(subList1)
  subList2 = mergeSort(subList2)

  return merge(subList1, subList2)
}
module.exports = mergeSort

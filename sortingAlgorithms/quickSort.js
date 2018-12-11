const swap = (list, pointer1, pointer2) => {
   const temp = list[pointer1];
   list[pointer1] = list[pointer2];
   list[pointer2] = temp;
}

const partitionFunction = (list, left, right, pivot) => {
  let leftPointer = left
  let rightPointer = right - 1
  while(true) {
    while(list[++leftPointer] < pivot) {}
    while(rightPointer > 0 && list[--rightPointer] > pivot) {}

    if (leftPointer >= rightPointer) break
    else {
      swap(list, leftPointer, rightPointer)
    }
  }

  swap(list, leftPointer,right);
  return leftPointer
}

const quickSort = (list, leftMostIndex, rightMostIndex) => {
  if ((rightMostIndex - leftMostIndex) <= 0) return
  else {
    let pivot = list[rightMostIndex]
    let partition = partitionFunction(list, leftMostIndex, rightMostIndex, pivot)
    quickSort(list, leftMostIndex, partition -1)
    quickSort(list, partition +1, rightMostIndex)
  }
}
module.exports = quickSort
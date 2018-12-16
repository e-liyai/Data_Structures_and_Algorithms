export default class {
    constructor() {
      this.heap = []
    }

    getParentIndex(childIndex) {return (childIndex - 1)/2}
    getRightChildIndex(parentIndex) {return (2 * parentIndex)+2}
    getLeftChildIndex(parentIndex) {return (2 * parentIndex)+1}

    hasLeftChild(index) { return getLeftChildIndex(index) < this.heap.length}
    hasRightChild(index) { return getRightChildIndex(index) < this.heap.length}
    hasParent(index) { return getParentIndex(index) >= 0}

    leftChild(index) { return this.heap[getLeftChildIndex(index)]}
    rightChild(index) { return this.heap[getRightChildIndex(index)]}
    parent(index) { return this.heap[getParentIndex(index)]}

    swap(indexOne, indexTwo) {
      const temp = this.heap[indexOne]
      this.heap[indexOne] = this.heap[indexTwo]
      this.heap[indexTwo] = temp
    }

    peek() {
      if(!this.heap.length) throw new Error('List is empty')
      return this.heap[0]
    }

    poll() {
      if(!this.heap.length) throw new Error('List is empty')
      let item = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      heapifyDown()
      return item
    }

    add(item) {
      this.heap.append(item)
      heapifyUp()
    }

    heapifyDown() {
      let index = 0
      while(hasLeftChild(index)) {
        let smallerChildIndex = getLeftChildIndex(index)
        if (hasRightChild(index) && rightChild(index) > leftChild(index)) {
          smallerChildIndex = getRightChildIndex(index)
        }

        if (this.heap[index] < this.heap[smallerChildIndex]) break
        else swap(index, smallerChildIndex)
        index = smallerChildIndex
      }
    }

    heapifyUp() {
      let index = this.heap.length - 1
      while(hasParent(index) && parent(index) > this.heap[index]) {
        swap(getParentIndex(index), index)
        index = getParentIndex(index)
      }
    }
}
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


}
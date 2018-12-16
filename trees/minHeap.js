export default class {
    constructor() {
      this.heap = []
    }

    getParentIndex(childIndex) {return parseInt((childIndex - 1)/2)}
    getRightChildIndex(parentIndex) {return (2 * parentIndex)+2}
    getLeftChildIndex(parentIndex) {return (2 * parentIndex)+1}

    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.heap.length}
    hasRightChild(index) { return this.getRightChildIndex(index) < this.heap.length}
    hasParent(index) { return this.getParentIndex(index) >= 0}

    leftChild(index) { return this.heap[this.getLeftChildIndex(index)]}
    rightChild(index) { return this.heap[this.getRightChildIndex(index)]}
    parent(index) { return this.heap[this.getParentIndex(index)]}

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
      this.heap.splice(-1,1)
      this.heapifyDown()
      return item
    }

    add(item) {
      this.heap.push(item)
      this.heapifyUp()
    }

    heapifyDown() {
      let index = 0
      while(this.hasLeftChild(index)) {
        let smallerChildIndex = this.getLeftChildIndex(index)
        if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
          smallerChildIndex = this.getRightChildIndex(index)
        }

        if (this.heap[index] < this.heap[smallerChildIndex]) break
        else this.swap(index, smallerChildIndex)
        index = smallerChildIndex
      }
    }

    heapifyUp() {
      let index = this.heap.length - 1
      while(this.hasParent(index) && this.parent(index) > this.heap[index]) {
        this.swap(this.getParentIndex(index), index)
        index = this.getParentIndex(index)
      }
    }

    size(){
      return this.heap.length
    }
}
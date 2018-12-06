import nodeElement from '../node/doublyNodeElement'

export default class {
  constructor() {
    this.tail = new nodeElement(null)
    this.head = new nodeElement(null)
    this.count = 0
  }

  addFront(nodeValue) {
    let newNode = new nodeElement(nodeValue)

    newNode.nodeNext = this.head._next
    if (this.head._next !== null) this.head._next.nodePrevious = newNode
    newNode.nodePrevious = this.head
    this.head.nodeNext = newNode
    this.count++
    if (this.count === 1) {
      this.tail.nodeNext = newNode
    }
  }

  addMiddle(currentNode, nodeValue) {
    let newNode = new nodeElement(nodeValue)
    let loopCounter = this.count
    let node = this.head._next
    while(loopCounter) {
      node = node._next
      if (node === currentNode){
        let prevNode = node._previous
        newNode.nodeNext = node
        prevNode.nodeNext = newNode
        newNode.nodePrevious = prevNode
        node.nodePrevious = newNode
        this.count++
        return
      }
      loopCounter--
    }
  }

  addLast(nodeValue) {
    let newNode = new nodeElement(nodeValue)
    if (this.count === 0) {
      this.head.nodeNext = newNode
      newNode.nodePrevious = this.head
    } else {
       this.tail._next.nodeNext = newNode
       newNode.nodePrevious = this.tail._next
    }
    this.tail.nodeNext = newNode
    this.count++
  }

  removeLast() {
    if (this.count !== 0) {
      if (this.count === 1) {
        this.tail.nodeNext = null
        this.head.nodeNext = null
      } else {
        let last = this.tail._next
        last._previous.nodeNext = null
        this.tail.nodeNext = last._previous
      }
      this.count--
    }
  }

  removeFirst() {
    if (this.count !== 0) {
      if (this.count === 1) {
        this.tail.nodeNext = null
        this.head.nodeNext = null
      } else {
        let secondNode = this.head._next._next
        secondNode.nodePrevious = this.head
        this.head.nodeNext = secondNode
      }
      this.count--
    }
  }
}
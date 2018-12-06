import nodeElement from '../node/nodeElement'

export default class {
  constructor() {
    this.tail = new nodeElement(null)
    this.head = new nodeElement(null)
    this.count = 0
  }

  addFront(nodeValue) {
    let newNode = new nodeElement(nodeValue)

    newNode.nodeNext = this.head._next
    this.head.nodeNext = newNode
    this.count++
    if (this.count === 1) {
      this.tail.nodeNext = newNode
    }
  }

  addLast(nodeValue) {
    let newNode = new nodeElement(nodeValue)
    if (this.count === 0) {
      this.head.nodeNext = newNode
    } else {
       this.tail._next.nodeNext = newNode
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
        let current = this.head
        while (current._next._next !== this.tail) {
          current = current._next
        }
        current._next = null
        this.tail._next = current
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
        this.head._next = this.head._next._next
      }
      this.count--
      if (this.count === 0) {
        this.tail.nodeNext = null
      }
    }
  }
}
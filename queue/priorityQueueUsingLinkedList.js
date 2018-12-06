import DoublyLinkedList from '../linkedList/doublyLinkedList'

export default class {
  constructor() {
    this._list = new DoublyLinkedList()
  }

  enqueue(item) {
    if (this._list.count === 0) this._list.addLast(item)
    else {
      let current = this._list.head._next
      while(current !== null && current._value > item) {
        current = current._next
      }

      if(current === null) {
        this._list.addLast(item)
      } else {
        this._list.addBefore(current, item)
      }
    }
  }

  dequeue() {
    if (this._list.count === 0) throw new Error('The queue is empty')
    const item = this._list.head._next
    this._list.removeFirst()
    return item._value
  }

  peek() {
    if(this._list.count === 0) throw new Error('Stack is empty')
    let item = this._list.head._next
    return item._value
  }

  count() {
    return this._list.count
  }
}
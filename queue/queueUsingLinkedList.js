import singlyLinkedList from '../linkedList/singlylinkedList'

export default class {
  constructor() {
    this._list = new singlyLinkedList()
  }

  enqueue(item) {
    this._list.addLast(item)
  }

  dequeue() {
    if(this._list.count === 0) throw new Error('Stack is empty')
    let item = this._list.head._next
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
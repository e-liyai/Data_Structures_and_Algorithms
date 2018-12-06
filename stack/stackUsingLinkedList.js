import singlyLinkedList from '../linkedList/singlylinkedList'

export default class {
  constructor() {
    this._list = new singlyLinkedList()
  }

  push(item) {
    this._list.addFront(item)
  }

  pop() {
    if(this._list.count === 0) {
      throw new Error('Stack is empty')
    }
    const nodeItem = this._list.head._next
    this._list.removeFirst()
    return nodeItem._value
  }

  peek() {
    if(this._list.count === 0) {
      throw new Error('Stack is empty')
    }
    const nodeItem = this._list.head._next
    return nodeItem._value
  }

  count() {
    return this._list.count
  }
}
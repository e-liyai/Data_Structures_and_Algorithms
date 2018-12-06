import singlyLinkedList from '../linkedList/singlylinkedList'

export default class {
  constructor() {
    this._list = new singlyLinkedList()
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

      }
    }
  }
}
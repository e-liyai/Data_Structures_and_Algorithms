import HashNode from '../node/hashTableNodePair'
import LinkedList from '../linkedList/singlylinkedList'

export default class {
  constructor(arrayLength) {
    this._list = new LinkedList(null)
  }

  add(key, value) {
    const hashNode = new HashNode(key, value)
    if(this._list.head._next === null) this._list.addFront(hashNode)
    else {
      let node = this._list.head._next
      while(node !== null){
        if(node._value._key === key) throw new Error('The collection already contains the key')
        node = node._next
      }
    }
    this._list.addFront(hashNode)
  }

  update(key, value) {
    let updated = false
    if(this._list.head._next !== null){
      let node = this._list.head._next
      while(node !== null){
        if(node._value._key === key){
          node._value.setValue = value
          updated = true
          break
        }
      }
    }
    if(!updated) {
      throw new Error('The collection does not contain the key')
    }
  }
}
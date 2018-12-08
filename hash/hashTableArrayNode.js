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
        node = node._next
      }
    }
    if(!updated) throw new Error('The collection does not contain the key')
  }

  tryGetValue(key) {
    let value = null
    if(this._list.head._next !== null){
      let node = this._list.head._next
      while(node !== null){
        if(node._value._key === key){
          value = node._value._value
          break
        }
        node = node._next
      }
    }
    if(value === null) throw new Error('The collection does not contain the key')
    return value
  }

  remove(key) {
    let value = false
    if(this._list.head._next !== null){
      let node = this._list.head._next
      while(node !== null){
        if(node._value._key === key){
          value = node._value._value
          break
        }
        node = node._next
      }
    }
    if(value === null) throw new Error('The collection does not contain the key')
    return value
  }
}
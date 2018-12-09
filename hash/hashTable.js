import HashTableArray from './hashTableArray'

export default class {
  FILLFACTOR = 0.75
  constructor(capacity) {
    if (capacity < 1) throw new Error('Initiate Capacity')
    this._array = new HashTableArray(capacity)
    this.maxItemAtCurrentSize = parseInt(capacity * this.FILLFACTOR) + 1
    this.count = 0
  }

  add(key, value) {
    if(this.count >= this.maxItemAtCurrentSize) {
      let largerArray =new HashTableArray(this._array.capacity() * 2)
      this._array.forEach(element => {
        //TODO: Implement loop over linked list
        largerArray.add(element.key, element.value)
      })
      this._array = largerArray
      this.maxItemAtCurrentSize = parseInt(_array.capacity * this.FILLFACTOR) + 1
    }
    this._array.add(key, value)
    this.count++
  }

  remove(key) {
    const removed = this._array.remove(key)
    if (removed) this.count--
    return removed
  }

  tryGetValue(key) {
    return this._array.tryGetValue(key)
  }
}
import HashTableArrayNode from './hashTableArrayNode'

export default class {
  constructor(arrayLength) {
    if (arrayLength === null) throw new Error('Array size must be instantiated')
    this._array = []
    for(let i; i < arrayLength; i++) {
      this._array[i] = new HashTableArrayNode(i)
    }
  }

  add(key, value) {
    this._array[this.getIndex()].add(key,value)
  }

  update(key, value) {
    this._array[this.getIndex()].update(key,value)
  }

  remove(key, value) {
    this._array[this.getIndex()].remove(key,value)
  }

  tryGetValue(key) {
    return this._array[1].tryGetValue(key)
  }

  capacity() {
    return this._array.length
  }

  getIndex() {
    //TODO: implement hashing algorithm here
    const min = Math.ceil(0);
    const max = Math.floor(this._array.length);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
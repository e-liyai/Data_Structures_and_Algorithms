import HashTableArrayNode from './hashTableArrayNode'

export default class {
  constructor(arrayLength) {
    if (arrayLength === null) throw new Error('Array size must be instantiated')
    this._length = arrayLength
    this._array = []
    for(let i; i < arrayLength; i++) {
      this._array[i] = new HashTableArrayNode()
    }
  }
}
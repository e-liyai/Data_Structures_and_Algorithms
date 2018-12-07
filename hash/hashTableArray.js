export default class {
  constructor(arrayLength) {
    if (arrayLength === null) throw new Error('Array size must be instantiated')
    this_._length = arrayLength
  }
}
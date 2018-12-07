export default class {
  constructor(value, left=null, right=null) {
    this._value = value
    this._left = left
    this._right = right
  }

  set nodeValue(value) {
    this._value = value
  }

  set nodeLeft(left) {
    this._left = left
  }

  set nodeRight(right) {
    this._right = right
  }

  greaterThan(value) {
    return this._value >= value
  }
}
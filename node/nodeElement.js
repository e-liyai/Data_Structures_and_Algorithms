export default class {
  constructor(value, next=null) {
    this._value = value
    this._next = next
  }

  set nodeValue(value) {
    this._value = value
  }

  set nodeNext(next) {
    this._next = next
  }
}
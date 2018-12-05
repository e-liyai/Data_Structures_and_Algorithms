export default class {
  constructor(value, next=null, previous=null) {
    this._value = value
    this._next = next
    this._previous = previous
  }

  set nodeValue(value) {
    this._value = value
  }

  set nodeNext(next) {
    this._next = next
  }

  set nodePrevious(previous) {
    this._previous = previous
  }
}
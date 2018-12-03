export default class {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }

  set nodeValue(value) {
    this.value = value
  }

  set nodeNext(next) {
    this.next = next
  }
}
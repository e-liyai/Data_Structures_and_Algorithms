module.exports = {
  printList: (node) => {
    while (node !== null) {
      console.log('Node Value: ', node._value, ' Node next value: ', node._next)
      node = node._next
    }
  }
}
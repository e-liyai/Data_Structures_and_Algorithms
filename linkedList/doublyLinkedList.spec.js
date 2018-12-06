import DoublyLinkedList from './doublyLinkedList'

let doublylinkedList
describe('test doubly linked list data structure', () => {
  beforeEach(() => {
    doublylinkedList = new DoublyLinkedList()
  })

  test('test if list is empty', () => {
    expect(doublylinkedList.count).toBe(0)
  })

  test('test add item to front of empty list', () => {
    doublylinkedList.addFront(77)
    let node = doublylinkedList.head._next
    expect(node._value).toBe(77)
    expect(node._next).toBe(null)
    expect(node._previous).toBe(doublylinkedList.head)
    expect(doublylinkedList.tail._next).toBe(node)
  })


})
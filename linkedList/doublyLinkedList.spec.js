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

  test('test add item to front of existing list', () => {
    doublylinkedList.addFront(66)
    doublylinkedList.addFront(75)
    let node = doublylinkedList.head._next
    expect(node._value).toBe(75)
    let lastNode = doublylinkedList.tail._next
    expect(lastNode._value).toBe(66)
    expect(lastNode._previous).toBe(node)
    expect(lastNode._next).toBe(null)
  })

  test('test add item to the back of an empty list', () => {
    doublylinkedList.addLast(12)
    let node = doublylinkedList.head._next
    let lastNode = doublylinkedList.tail._next
    expect(node._value).toEqual(lastNode._value)
    expect(node._next).toEqual(null)
    expect(node._previous).toEqual(doublylinkedList.head)
  })

})